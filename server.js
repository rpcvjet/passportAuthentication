'use strict';

var express  = require('express');
var app      = express();
var port     = process.env.PORT || 8080;
var mongoose = require('mongoose');
var passport = require('passport');
var flash    = require('connect-flash');
var cors = require('cors');

var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');

var configDB = require('./config/database.js');

// configuration ===============================================================
mongoose.connect(configDB.url); // connect to our database
mongoose.connection.on('connected', function() {
  console.log('connected to database');
});

mongoose.connection.on('err', function(err)  {
  console.log('OOPS, not connected', err);
});

require('./config/passport')(passport); // pass passport for configuration

// set up our express application
app.use(cors());
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({ extended: true }));


app.set('view engine', 'ejs'); // set up ejs for templating

// required for passport
app.use(session({ secret: 'mynameisken', resave: true, saveUninitialized: true })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// routes ======================================================================
require('./app/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport

// launch ======================================================================
app.listen(port, function() {

  console.log('The magic happens on port ' + port);
});
