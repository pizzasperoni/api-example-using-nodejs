var mongoose = require('mongoose');

//Book Schema
var bookSchema = mongoose.Schema({
	title: {
		type: String,
		required: true

	},
	genre: {
		type: String,
		required: true
	},
	description: {
		type: String
	},
	author: {
		type: String,
		required: true
	},
	publisher: {
		type: String
	},
	pages: {
		type: String
	},
	image_url: {
		type: String
	},
	but_url: {
		type: String
	},
	create_date: {
		type: Date,
		default: Date.now
	}

});

var Book = module.exports = mongoose.model('Book', bookSchema);

//Get books 
module.exports.getBooks = function(cb, limit){
	Book.find(cb).limit(limit);
};

//Get book by Id
module.exports.getBooksById = function(id, cb){
	Book.findById(id, cb);
};

//Add books
module.exports.addBook = function (book, cb){
	Book.create(book, cb);
}

//Update book
module.exports.updateBook = function (id, book, options, cb){
	var query = {_id: id};
	var update = {
		title: book.title,
		genre: book.genre,
		descrition: book.description,
		author: book.author,
		publisher: book.publisher,
		image_url: book.image_url,
		but_url: book.but_url,
		pages: book.pages
	}
	Book.findOneAndUpdate(query, update, options, cb);
}

//Delete book
module.exports.removeBook = function (id, cb){
	var query = {_id : id};
	Book.remove(query, cb);
}