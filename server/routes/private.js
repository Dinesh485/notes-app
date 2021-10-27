const router = require('express').Router()
const passport = require('passport')

router.get('/private',passport.authenticate('jwt',{session: false, failureRedirect: '/login'}), (req,res) =>{
    res.send(req.user)
})

module.exports = router