const router = require('express').Router();

const bcrypt = require('bcryptjs');

const tokenHelpers = require('../api/tokenHelpers')

const Users = require('../api/users-model')

router.post('/register', (req, res) => {
  // implement registration

  let user = req.body;

  const hash = bcrypt.hashSync(user.password, 8);

  user.password = hash

  Users.add(user)
  .then(userInfo => {

      const token = tokenHelpers.signToken(userInfo)
      res.status(201).json(
          {
              token,
              message: `Created user ${userInfo.username} with an id of ${userInfo.id}`
      })
  })
  .catch(err => {
      res.status(500).json({error: `Internal, faliure to create user, ${err}`})
  })
});

router.post('/login', (req, res) => {
  // implement login
  let {username, password} = req.body;


  Users.findUsersBy({username})
  .first()
  .then(user => {
      if(user && bcrypt.compareSync(password, user.password)){
          // req.session.user = user;

          const token = tokenHelpers.signToken(user);
         // res.cookie('user_id', user.id, { maxAge: 900000, httpOnly: true }) ;
          res.status(200).json(
              
              {
                  token,
                  message: `Logged in, user id: ${user.id}`
          
          })
      }else{
          res.status(401).json({message: 'You shall not pass!'})
      }
  })
  .catch(err => {
      res.status(500).json({error: `Internal error: ${err}`})
  });
});

module.exports = router;
