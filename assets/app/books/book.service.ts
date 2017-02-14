import { Injectable } from "@angular/core";
import { Headers, Http, Response } from "@angular/http";
import "rxjs/Rx"; // needed to use .map() mathod
import { Observable } from "rxjs"; // needed to use .map() mathod
import { Book } from "./book.model";

@Injectable()

export class BookService{

	books: Book [] = [];

	constructor(private http: Http){}

	getBooks(){
		//console.log (this.books);
		//return this.books;
		return this.http.get('http://localhost:3000/books')
		.map((response: Response) => {
			const books = response.json().obj;
			let transformedBooks: Book[] = [];
			for(let book of books){
				transformedBooks.push(
					new Book(
						book._id,
						book.isbn,
						book.title,
						book.imageUrl,
						book.description,
						book.author
					));
			}
			this.books = transformedBooks;
			return transformedBooks;
		}).catch((error: Response) => {
			return Observable.throw(error.json())
		});
	}

	addBook(book: Book){
		this.books.push(book);

		const body = JSON.stringify(book);
		const headers = new Headers({'Content-Type': 'application/json','Accept': 'application/json'});
		return this.http.post('http://localhost:3000/books/add', body, {headers: headers})
		.map((response: Response) => response.json())
		.catch((error: Response) => Observable.throw(error.json()));
	}

}