// App dependencies //
var createError   = require('http-errors');
var express       = require('express');
var path          = require('path');
var cookieParser  = require('cookie-parser');
var logger        = require('morgan');
var mongoose      = require('mongoose');
var bodyParser    = require('body-parser');
var passport      = require('passport');
var LocalStrategy = require('passport-local');
var User          = require('./models/user');

var app = express();

var http = require('http').Server(app);

// Routes
var indexRouter     = require('./routes/index');
var secretRouter    = require('./routes/secret');
var registerRouter  = require('./routes/register');
var loginRouter     = require('./routes/login');
var logoutRouter    = require('./routes/logout');

require('dotenv').config()

const dbUrl = process.env.DATABASEURL;

// MongoDB connection //
mongoose.connect(dbUrl, {useNewUrlParser: true});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// body-parser
app.use(bodyParser.urlencoded({extended: true}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// PASSPORT CONFIG
app.use(require('express-session')({
  secret: 'Secrets... Secrets...',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize())
app.use(passport.session())
passport.use(new LocalStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

app.use('/', indexRouter);
app.use('/secret', secretRouter);
app.use('/register', registerRouter);
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// Start Server
http.listen(process.env.PORT || 3000, function(){
  console.log('listening on', http.address().port);
});

module.exports = app;
