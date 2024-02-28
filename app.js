var createError = require('http-errors');
var express = require('express');
var path = require('path');
var https = require('https');
var fs = require('fs');
var cors = require('cors');
var logger = require('morgan');
require('dotenv').config()

const passport = require('passport');
const FacebookStrategy  = require('passport-facebook').Strategy;
const session  = require('express-session');
const cookieParser = require('cookie-parser');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const NodeCache = require("node-cache");
const configFB = require('./config/configFB');
const routeFB = require('./routes/passport');

const myCache = new NodeCache({ stdTTL: 100, checkperiod: 60 * 60 });
var app = express();

// Passport session setup. 
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

// Sử dụng FacebookStrategy cùng Passport.
passport.use(new FacebookStrategy({
  clientID: configFB.facebook_key,
  clientSecret: configFB.facebook_secret ,
  callbackURL: configFB.callback_url
},
function(accessToken, refreshToken, profile, done) {
  process.nextTick(function () {
    console.log(accessToken, refreshToken, profile, done);
    return done(null, profile);
  });
}
));

const bodyParser = require('body-parser');

// //Connect to database
// require('./models/Database/indexDB');

app.locals.cache = myCache
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(cors());
app.use(bodyParser.json({limit:1024*1024*20, type:'application/json'}));
app.use(bodyParser.urlencoded({ extended:true,limit:1024*1024*20,type:'application/x-www-form-urlencoded' }));

//app.use(upload.array());
app.use(express.static('public'));
app.use('/public', express.static(__dirname + "/public"));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false, limit: '50mb'}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: 'keyboard cat', key: 'sid'}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/fb', routeFB);

let routes = require('./routes/api/restful/api');
routes(app);

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

// require('./services/forgot_password')
// require('./cronjobs/CountView')
// require('./cronjobs/CountViewMakeUp')

module.exports = app;
