const passport = require('passport')

const router = require('express').Router()
const {verifyPassword, hashPassword} = require('../lib/utils')
const List = require('../models/list')
const User = require('../models/user')
const{ cloudinary} = require('../config/coudinary')


router.get('/profile' , passport.authenticate('jwt', {session:false}), (req, res) =>{
      const profile= {
          email: req.user.email,
          profile_img : req.user.profile_img && req.user.profile_img.secure_url 
      }
      res.send({success: true, profile: profile})
})

router.post('/changePassword' , passport.authenticate('jwt', {session: false}), async(req,res) =>{
    const {oldPassword, newPassword} = req.body
    const truePassword = await verifyPassword(oldPassword, req.user.password)
    if(truePassword){
        const newhashPass =await hashPassword(newPassword, 10)
       return User.updateOne({_id: req.user._id}, {password: newhashPass}).then(() =>{
            res.send({success : true})
        })
    }else{
        return res.send({success: false, msg: 'incorrect password'})
    }
})
router.post('/deleteAccount' , passport.authenticate('jwt', {session: false}), async(req,res) =>{
    const {password} = req.body
    const truePassword = await verifyPassword(password, req.user.password)
    if(truePassword){
        if(req.user.profile_img){
            await cloudinary.uploader.destroy(req.user.profile_img.public_id)
         }
         
         return List.deleteOne({_id: req.user.list}).then(() =>{
            User.deleteOne({_id: req.user._id}).then(() =>{
                res.send({success: true})
            })
         })
    }else{
        return res.send({success: false, msg: 'incorrect password'})
    }
})

router.post('/profileImage', passport.authenticate('jwt', {session: false}), async(req,res ) =>{
         
        
         
        const resource_object = await cloudinary.uploader.upload(req.body.file, {
            upload_preset: 'profile_image',

        })
        if(req.user.profile_img){
           await cloudinary.uploader.destroy(req.user.profile_img.public_id)
        }
        
        
         User.findOneAndUpdate({_id: req.user._id}, { $set:{profile_img: resource_object} , } ,{new: true}).then(user =>{
             res.send({success: true, profile_img: user.profile_img.secure_url})
         })
        
     
})


module.exports = router