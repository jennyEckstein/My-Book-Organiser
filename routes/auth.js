var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

var User = require("../models/user");
var List = require("../models/list");

router.post('/addList', function(req, res, next){

	var list = new List({
		listName: req.body.listName, 
		creationDate: req.body.createdDate,
		userRef: req.body.userRef
	});

	list.save(function(err, result){
		if(err){
			return res.status(500).json({
				title: 'An error occured',
				error: err
			});
		}
		User.findById(req.body.userRef, function(err, user){
			if(err){
				return res.status(401).json({
					title: 'Cannot save list to the user',
					error:err
				})
			}
			user.save();
		});

		res.status(201).json({
			message: 'List Saved',
			obj: result
		});
	});
});

router.get('/:id', function(req, res, next){
	User.findById(req.params.id, function(err, user){
		if(err){
			return res.status(500).json({
				title: 'An error occured',
				error: err
			})
		}
		if (!user){
			return res.status(500).json({
				title: 'User not found',
				error: err
			});
		}
		res.status(200).json({
				message: 'User found',
				obj: user
		})
	})
});

router.post('/signin', function(req, res, next){
	User.findOne({email: req.body.email}, function(err, user){
		console.log(req.body.email);
		if (err){
			return res.status(500).json({
				title: 'An error occured',
				error: err
			});
		}
		if(!user){
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
		password: bcrypt.hashSync(req.body.password, 10),
		lists: req.body.lists
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