const JwtStrategy = require('passport-jwt').Strategy
const {ExtractJwt} = require('passport-jwt')
const passport = require('passport')
const fs = require('fs')
const User = require('../models/user')

const PUB_KEY = fs.readFileSync(__dirname + '/../lib/id_rsa_pub.pem')

const Jwtoptions = {
     jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
     secretOrKey: PUB_KEY,
     
}

const JwtStrat = new JwtStrategy(Jwtoptions, (payload, done) =>{
     User.findOne({_id : payload.sub}).then((user) =>{
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
             
        }
     }).catch(err =>{
         return done(err, false)
     })
})




passport.use(JwtStrat)