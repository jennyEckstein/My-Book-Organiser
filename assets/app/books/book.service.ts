import { Injectable } from "@angular/core";
import { Headers, Http, Response } from "@angular/http";
import "rxjs/Rx"; // needed to use .map() mathod
import { Observable } from "rxjs"; // needed to use .map() mathod
import { Book } from "./book.model";

@Injectable()

export class BookService{

	books: Book [] = [];

	constructor(private http: Http){}

	getBook(id: string){
		return this.http.get('http://127.0.0.1:3000/books/' + id )
			.map((response: Response) => response.json())
			.catch((error: Response) => Observable.throw(error.json()));
	}

	getBooks(){
		//console.log (this.books);
		//return this.books;
		return this.http.get('http://127.0.0.1:3000/books')
		.map((response: Response) => {
			const books = response.json().obj;
			let transformedBooks: Book[] = [];
			for(let book of books){
				transformedBooks.push(
					new Book(						
						book.isbn,
						book.title,
						book.imageUrl,
						book.description,
						book.author,
						book._id
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
		return this.http.post('http://127.0.0.1:3000/books/add', body, {headers: headers})
		.map((response: Response) => response.json())
		.catch((error: Response) => Observable.throw(error.json()));
	}

	deleteBook(book: Book){
		console.log('book here');
		console.log(book);
		this.books.splice(this.books.indexOf(book), 1 );
		return this.http.delete('http://127.0.0.1:3000/books/' + book.book_id)
		.map((response: Response) => response.json())
		.catch((error: Response) => {
			return Observable.throw(error.json())
		});
	}

}