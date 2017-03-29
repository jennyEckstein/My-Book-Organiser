var express = require('express');
var router  = express.Router();

var Book = require('../models/books');

router.get('/:id', function(req, res, next){
	Book.findById(req.params.id, function(err, book){
		if(err){
			return res.status(500).json({
				title: 'An Error Occured',
				error: err
			})
		}
		if(!book){
			return res.status(400).json({
				title: 'Book not found',
				error: err
			})
		}
		res.status(200).json({
			message: 'Returning Book',
			obj: book
		})
	})
});

router.get('/',  function(req, res, next){
	Book.find().exec(function(err, books){
		if (err){
			return res.status(500).json({
				title: 'Error Reading Books from DB',
				error: err
			});
		}
		res.status(200).json({
			message: 'Success',
			obj: books
		});
	});
});

router.post('/add', function(req, res, next){
	var book = new Book({
		isbn: req.body.isbn,
		title: req.body.title,
		imageUrl: req.body.imageUrl,
		author: req.body.author,
		description: req.body.description
	});
	book.save(function(err, result){
		if (err){
			return res.status(500).json({
				title: 'An error occured',
				error: err
			});
		}
		res.status(201).json({
			massage: 'Saved message',
			obj: result
		});
	});
});


router.delete('/:id', function(req, res, next){
	Book.findById(req.params.id, function(err, book){
		if(err){
			return res.status(500).json({
				title: 'An Error occured',
				error: err
			})
		}
		if (!book){
			return res.status(500).json({
				title: 'Message Not Found',
				error: { book: 'Book not found'}
			});
		}
		book.remove(function(err, result){
			if (err){
				return res.status(500).json({
					title: 'An Error occured',
					error: err
				});
			}
			res.status(200).json({
			message: 'Book Deleted', 
			obj: result
		});
		});
	});
});

module.exports = router;