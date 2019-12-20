/* 
  complete the middleware code to check if the user is logged in
  before granting access to the next middleware/route handler
*/

const jwt = require('jsonwebtoken')


module.exports = (req, res, next) => {
  const {token} = req.headers;

  const secret = process.env.JWT_SECRET
  
      if (token) {
        jwt.verify(token, secret, function(err, decoded) {
          if(err){
            res.status(401).json({message: "invalid token"})
          } else{
            req.token = decoded

            next();
          } 
              })
    
      } else {
        res.status(401).json({ message: 'You Shall Not Pass' });
      }
};
