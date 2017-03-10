var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

var User = require("../models/user");

/*router.post('/:firstName', function(req, res, next){
	console.log("additing list");
	var user = new User({
		firstName: req.firstName,
		lists: ["New List"]
	});
	user.save(function(err, result){
		if(err){
			return res.status(500).json({
				title: 'An error occured',
				error: err
			});
		}
		res.status(201).json({
			message: 'Saved to list',
			obj: result
		});
	});
});*/

router.post('/signin', function(req, res, next){
	console.log("auth.js");
	User.findOne({email: req.body.email}, function(err, user){
		console.log(req.body.email);
		if (err){
			console.log("something off");
			return res.status(500).json({
				title: 'An error occured',
				error: err
			});
		}
		if(!user){
			console.log("Something went wrong");
			return res.status(400).json({
				title: 'Login failed - user not returned',
				error: {message: 'Invalid login credentials'}
			});
		}
		if (!bcrypt.compareSync(req.body.password, user.password)){
			return res.status(401).json({
				title: 'Login failed - wrong password',
				error: {message: 'Invalid login credentials'}
			});
		}
		var token = jwt.sign(
			{user:user}, 'secret', {expiresIn: 7200});
		res.status(200).json({
			message: 'Logged In',
			token: token,
			userId: user._id
		});
	});
});

router.post('/signup', function(req, res, next){	
	var user = new User({
		firstName: req.body.firstName, 
		lastName: req.body.lastName,
		email: req.body.email,
		password: bcrypt.hashSync(req.body.password, 10)
	});

	user.save(function(err, result){
		if (err){
			return res.status(500).json({
				title: 'An error occured',
				error: err
			});
		}
		res.status(201).json({
			message: 'User created',
			obj: result
		})
	});
});


module.exports = router;