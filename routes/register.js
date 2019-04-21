var express = require('express');
var passport = require('passport');

var router = express.Router();

var User = require('../models/user');

// Register Route //
router.get('/', function(req, res){
  res.render('register', {title: 'Sign Up Page'})
});

// Sign Up logic //
router.post('/', function(req, res) {
  var newUser = new User({username: req.body.username});

  User.register(newUser, req.body.password, function(err, user){
      if(err) {
        console.log(err);
        return res.send('Something wrong! Please try again.');
      }
      passport.authenticate('local')(req, res, function(){
        res.redirect('/login');
    });
  });
});

module.exports = router;
