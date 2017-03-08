var express = require('express');
var router = express.Router();

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
		if (req.body.password !== user.password){
			return res.status(401).json({
				title: 'Login failed - wrong password',
				error: {message: 'Invalid login credentials'}
			});
		}

		res.status(200).json({
			message: 'Logged In',
			user_name: user.firstName
		});
	});
});

router.post('/signup', function(req, res, next){
	console.log("posting");
	var user = new User({
		firstName: req.body.firstName, 
		lastName: req.body.lastName,
		email: req.body.email,
		password: req.body.password
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