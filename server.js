var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Genre = require('./models/genre');
var Book = require('./models/book');

//Initialize bodyParser
app.use(bodyParser.json());

//connect to Mongoose
mongoose.connect('mongodb://localhost/bookstore');
var db = mongoose.conection;

app.get('/', function (req, res){
	res.send('Please use the API endpoint at /api/books');

});

//Get genres
app.get('/api/genres', function(req, res){
	Genre.getGenres(function(err, genres){
		if (err){
			throw err;
		}
		res.json(genres);
	});
});

//Update genres
app.put('/api/genres/:_id', function(req, res){
	var id = req.params._id;
	var genre = req.body;
	Genre.updateGenre(id, genre, {}, function(err, genre){
		if (err){
			throw err;
		}
		res.json(genre);
	});
});


//Add genre
app.post('/api/genres', function(req, res){
	var genre = req.body;
	Genre.addGenre(genre, function(err, genre){
		if (err){
			throw err;
		}
		res.json(genres);
	});
});

//Delte genre
app.delete('/api/genres/:_id', function(req, res){
	var id = req.params._id;
	Genre.removeGenre(id, function(err, genre){
		if (err){
			throw err;
		}
		res.json(genre);
	});
});


/**********************************************************/

//Get all books
app.get('/api/books', function(req, res){
	Book.getBooks(function(err, books){
		if (err){
			throw err;
		}
		res.json(books);
	});
});

//Get book by Id
app.get('/api/books/:_id', function(req, res){
	Book.getBooksById(req.params._id, function(err, books){
		if (err){
			throw err;
		}
		res.json(books);
	});
});

//Add book
app.post('/api/books', function(req, res){
	var book = req.body;
	Book.addBook(book, function(err, book){
		if (err){
			throw err;
		}
		res.json(book);
	});
});

//Update Book
app.put('/api/books/:_id', function(req, res){
	var id = req.params._id;
	var book = req.body;
	Book.updateBook(id, book, {}, function(err, book){
		if (err){
			throw err;
		}
		res.json(book);
	});
});

//Delte boook
app.delete('/api/books/:_id', function(req, res){
	var id = req.params._id;
	Book.removeBook(id, function(err, book){
		if (err){
			throw err;
		}
		res.json(book);
	});
});
app.listen(3000);
console.log('Running on port 3000..');