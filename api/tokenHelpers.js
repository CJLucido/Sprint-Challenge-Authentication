
const jwt = require('jsonwebtoken')


module.exports ={
    signToken
};


function signToken(user){
    const payload = {
        id: user.id,
      username:user.username
    };
    
    const secret = process.env.JWT_SECRET ; //|| 'is it secret, is it safe?'
    
    const options = {
      expiresIn: '1h',
    
    };
    
      return jwt.sign(payload, secret, options)
    };