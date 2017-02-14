import { Injectable } from "@angular/core";
import { Headers, Http, Response } from "@angular/http";
import "rxjs/Rx"; // needed to use .map() mathod
import { Observable } from "rxjs"; // needed to use .map() mathod
import { Book } from "./book.model";

@Injectable()

export class BookService{

	constructor(private http: Http){}

	books: Book[] = [
		{isbn: "9788884516374",
		title: "Harry Potter and the Half-Blood Prince",
		imageUrl: "http://t2.gstatic.com/images?q=tbn:ANd9GcTu6qiu_4oDTrMPiOFsqN4dQlieXvACHlShacQq5TEpx61b8QIN",
		description: "Harry Potter and the Half-Blood Prince is the sixth and penultimate novel in the Harry Potter series, written by British author J. K. Rowling.",
		author: "J. K. Rowling"},

		{isbn: "9780399585401",
		title: "The Help",
		imageUrl: "http://t0.gstatic.com/images?q=tbn:ANd9GcQwiJZcaVtB3LG7EBXJzNnPLDaLhnt48VeptNvvy5mM_cIvNAUF",
		description: "The Help is a 2009 novel by American author Kathryn Stockett. The story is about black maids working in white households in Jackson, Mississippi, during the early 1960s. A USA Today article called it one of the \"summer sleeper hits.\"",
		author: "Kathryn Stockett"},
	];

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