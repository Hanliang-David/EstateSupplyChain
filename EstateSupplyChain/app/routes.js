// app/routes.js
//路由配置文件
var supp = require('./insert');
module.exports = function(app, passport) {

	// =====================================
	// HOME PAGE (with login links) ========
	// =====================================
	app.get('/', function(req, res) {
		res.render('index.html'); // load the index.ejs file
	});

	// =====================================
	// LOGIN ===============================
	// =====================================
	// show the login form
	app.get('/login', function(req, res) {
		// render the page and pass in any flash data if it exists
		res.render('login.html', { message: req.flash('loginMessage') });
	});

	// process the login form
	app.post('/login',
     passport.authenticate('local-login', 
	{
            //successRedirect :'/index', // redirect to the secure profile section
            failureRedirect : '/login', // redirect back to the signup page if there is an error
            failureFlash : true // allow flash messages
		}),function(req, res) {
            console.log("hello");
            console.log(req.user.position);
            if(req.user.position == 1){
            	console.log(req.user.username);
            	res.redirect('/seller');

            } else if(req.user.position == 2){
            	res.redirect('/supplier');
            } else {
            	res.redirect('/index');
            }

            if (req.body.remember) {
              req.session.cookie.maxAge = 1000 * 60 * 3;
            } else {
              req.session.cookie.expires = false;
            }
            //res.redirect('/');
    }
        );

	// =====================================
	// SIGNUP ==============================
	// =====================================
	// show the signup form
	app.get('/signup', function(req, res) {
		// render the page and pass in any flash data if it exists
		res.render('signup.html', { message: req.flash('signupMessage') });
	});

	app.get('/details', function(req, res) {
	
		res.render('details.html', { message: req.flash('loginMessage') });
	});
	app.post('/details',function(req,res){

	   //console.log(req.body.estate_id);
	   supp.queryDetails(req,res);
	   //res.render('details.html', { message: req.flash('loginMessage') });
    });
	/*app.post('/details', function(req, res) {
	
		res.render('details.html', { message: req.flash('loginMessage') });
	});*/

	app.get('/myEstate', function(req, res) {
	
		res.render('myEstate.html', { message: req.flash('loginMessage') });
	});
	app.post('/myEstate', function(req, res) {
	
		res.render('myEstate.html', { message: req.flash('loginMessage') });
	});

    app.get('/supplier', function(req, res) {
	
		res.render('supplier.html', { message: req.flash('loginMessage') });
	});
    app.post('/supplier',function(req,res){
	   
	    //console.log(req.body.estate_id);
	    supp.insertSupplier(req,res);
    });

    app.get('/seller', function(req, res) {

		res.render('seller.html', { message: req.flash('loginMessage') });
	});
	app.post('/seller',function(req,res){
	   
	    //console.log(req.body.estate_id);
	    //console.log(req.body.seller_extrainfo);
	    supp.insertSeller(req,res);
    });

    app.get('/customer', function(req, res) {
	
		res.render('customer.html', { message: req.flash('loginMessage') });
	});
    app.post('/customer',function(req,res){
	    
	    //console.log(req.body.estate_id);
	    supp.insertCustomer(req,res);
    });
   
	/*app.post('/seller', function(req, res) {
	
		res.render('seller.html', { message: req.flash('loginMessage') });
	});*/
	
	/*app.post('/customer', function(req, res) {

		res.render('customer.html', { message: req.flash('loginMessage') });
	});*/

	// process the signup form
	app.post('/signup', passport.authenticate('local-signup', {
		successRedirect : '/login', // redirect to the secure profile section
		failureRedirect : '/signup', // redirect back to the signup page if there is an error
		failureFlash : true // allow flash messages
	}));

	// =====================================
	// PROFILE SECTION =========================
	// =====================================
	// we will want this protected so you have to be logged in to visit
	// we will use route middleware to verify this (the isLoggedIn function)
	app.get('/index', isLoggedIn, function(req, res) {
		res.render('index.html', {
			user : req.user // get the user out of session and pass to template
		});
	});

	// =====================================
	// LOGOUT ==============================
	// =====================================
	app.get('/logout', function(req, res) {
		req.logout();
		res.redirect('/');
	});
};

// route middleware to make sure
function isLoggedIn(req, res, next) {

	// if user is authenticated in the session, carry on
	if (req.isAuthenticated())
		return next();

	// if they aren't redirect them to the home page
	res.redirect('/');
}
