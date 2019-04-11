// SHOW LOGIN FORM //
var express = require('express');
var passport  = require('passport');
var router = express.Router();

router.get('/', function(req, res){
    res.render('login', {title: 'Login Page'});
  });

  // Login logic
router.post('/', passport.authenticate('local',
{
  successRedirect: 'secret',
  failureRedirect: 'login'
  
  }), function(req, res){
});

module.exports = router;