var express = require('express');

var router = express.Router();

// Request user data
router.use(function(req, res, next){
  res.locals.currentUser = req.user;
  next();
});

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'NEMP Login' });
});

module.exports = router;