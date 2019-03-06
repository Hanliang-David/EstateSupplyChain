// server.js
// set up ======================================================================
// get all the tools we need
//初始启动文件，从这里开始
var express  = require('express');
var session  = require('express-session');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var hbs = require('hbs');
var app      = express();
var port     = process.env.PORT || 8080;
var passport = require('passport');
var flash    = require('connect-flash');
//var Web3 = require("web3");
/*app.use('/angular',express.static( __dirname + '/node_modules/angular'));
var route = require('./config/route');
app.use('/route',route);*/
// configuration ===============================================================
// connect to our database

require('./config/passport')(passport); // pass passport for configuration
//require('./app/insert');
app.use(express.static('./'));

var mysql = require('mysql');
//var dbconfig = require('../config/database');
connection = mysql.createConnection({
	    'host': 'localhost',
        'user': 'root',
        'password': '',  
	    'database': 'www'
});

connection.connect(function(err){
  if(err) throw err;
  console.log("connected1111111111111111111!");
 });

// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

//app.set('view engine', 'ejs');  set up ejs for templating
app.set('view engine', 'html');
app.engine('html', hbs.__express);

// required for passport
app.use(session({
	secret: 'vidyapathaisalwaysrunning',
	resave: true,
	saveUninitialized: true
 } )); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// routes ======================================================================
require('./app/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport

// launch ======================================================================
app.listen(port);
console.log('The magic happens on port ' + port);
module.exports = app;
