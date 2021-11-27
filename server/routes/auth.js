const router = require('express').Router()
const {body , validationResult} = require('express-validator')
const User = require('../models/user')
const List = require('../models/list')
const utils = require('../lib/utils')
const passport = require('passport')

const registerValidators = [
    body('email').isEmail().withMessage('enter a valid email'),
    body('email').custom((email) =>{
      return User.findOne({email: email}).then(user =>{
            if(user){
                return Promise.reject('email already registered')
            }
        })
    }),
    body('password').isLength({min: 8}).withMessage('password should be 8 char long'),
    body('password').custom(pass =>{
         const regex =  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

         if(!regex.test(pass)){
          throw new Error('password should contain atleast one special character and number')
         }
         return true
    })
]


router.post('/register',registerValidators, async (req,res) =>{
   
    const {email, password} = req.body

    const validationErrors = validationResult(req)
   
    if(!validationErrors.isEmpty()){
        return res.send(validationErrors)
    }
   
   const hashPass = await  utils.hashPassword(password, 10)
   
   const newList = new List({
       items : []
   })
    
   newList.save().then(list =>{

    const newUser = new User({
        email: email,
        password: hashPass,
        list: list._id
    })

    newUser.save().then(async user =>{

        const token = await  utils.signJWT( user._id)
 
        return res.send({success: true, token: token})
    }).catch(err =>{
        return res.send({success: false, message: 'there is a problem saving user'})
    })

   })



})

const loginValidators = [
    body('email').isEmail().withMessage('enter a valid email'),
    body('email').custom((email) =>{
      return User.findOne({email: email}).then(user =>{
            if(!user){
                return Promise.reject('email not registered')
            }
        })
    }),
    body('password').custom((pass , {req}) =>{
         
         return  User.findOne({email: req.body.email}).then(async user =>{
               if(!await utils.verifyPassword(pass, user.password )){
                   return Promise.reject('incorrect password')
               }
           })
          
         
    })
]

router.post('/login',loginValidators, async(req,res) =>{
     const {email, password } = req.body
     const validationErrors = validationResult(req)

     if(!validationErrors.isEmpty()){
         return res.send(validationErrors)
     }
     
     User.findOne({email: email}).then( async user =>{
         const token = await utils.signJWT(user._id)
         return res.send({success: true, token: token})
     }).catch(err =>{
         return res.send({success: false, message: 'something went wrong, cant login'})
     })


})


router.get('/google',passport.authenticate('google', {session: false, scope : ['email']}))

router.get('/google/redirect',passport.authenticate('google', {session: false, failureRedirect : '/register'}), async(req,res) =>{
        const token = await utils.signJWT(req.user._id)

        return res.send({success: true, token: token})
        
})

module.exports = router