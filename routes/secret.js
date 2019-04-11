
var express = require('express')

var router = express.Router();

router.get('/', isLoggedIn, function(req, res){
    res.render('secret', {title: 'Secret Page'});
});

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/login');
}

module.exports = router;