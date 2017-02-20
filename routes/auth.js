var express = require('express');
var router = express.Router();

var User = require("../models/user");

router.post('/signin', function(req, res, next){
	User.findOne({email: req.body.email}, function(err, user){
		if (err){
			return res.status(500).json({
				title: 'An error occured',
				error: err
			});
		}
		if(!user){
			return res.status(401).json({
				title: 'Login failed',
				error: {message: 'Invalid login credentials'}
			});
		}
		if (req.body.password !== user.password){
			return res.status(401).json({
				title: 'Login failed',
				error: {message: 'Invalid login credentials'}
			});
		}

		res.status(200).json({
			message: 'Logged In'
		});
	})
});

router.post('/', function(req, res, next){
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