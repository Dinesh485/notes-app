const JwtStrategy = require('passport-jwt').Strategy
const {ExtractJwt} = require('passport-jwt')
const GoogleStrategy = require('passport-google-oauth20').Strategy
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

const googleOptions ={
    clientID:'145970345955-0ov8uannsc629aig7mga0m8ekrk126lc.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: "http://localhost:3000/google/redirect"
}

const GoogleStrat = new GoogleStrategy(googleOptions, (refreshToken, accessToken , profile, done) =>{

      User.findOne({email: profile._json.email}).then(async (user)=>{
         
           if(user){
              return done(null, user)
           }else{
              return done(null, false)
           }
           
      }).catch(err =>{
          return done(err, false)
      })
})

passport.use(GoogleStrat)

passport.use(JwtStrat)