var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');

var session = require('express-session');
var MongoStore = require('connect-mongo')(session);

const config = require('config');

import db from './lib/db';
import passport from './lib/passport';
import router from './routes';
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cookieParser());

app.use(express.static(path.join(__dirname, '/public')));

// init session, save session to DB
app.use(session({
  secret: config.cookieSecret,
  cookie: {maxAge: 1000 * 60 * 60 * 24 * 30},
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({
    url: config.db.uri
  })
}));


// init passport
passport(app);


// init route 
router(app);


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

app.listen(config.port, function() {
	console.log(`listening on ${config.port}`)
})
