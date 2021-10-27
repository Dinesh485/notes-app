const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const fs = require('fs')

const PRIV_KEY = fs.readFileSync(__dirname + '/id_rsa_priv.pem')

const signJWT = async(id) =>{
    const payload ={
        sub: id,
        iat: Date.now()
    }
   return await jwt.sign(payload, PRIV_KEY, {algorithm : 'RS256', expiresIn : '7d'})
}

const hashPassword = async( pass, saltRounds ) =>{
     const salt = await bcrypt.genSalt(saltRounds)
     const hash = await bcrypt.hash(pass, salt)
     return hash
}
const verifyPassword = async (password, hash) =>{
    // if(hash === null  || password === null){
    //   return false
    // }
     return await bcrypt.compare(password, hash)
}
module.exports ={ hashPassword, signJWT, verifyPassword }