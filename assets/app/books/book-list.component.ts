import { Component, OnInit } from "@angular/core";

import { Book } from "./book.model";
import { BookService } from "./book.service";
import { BookComponent } from "./book.component";

@Component ({
	selector: 'app-book-list',
	template: `<div
		*ngFor="let book of books">
		<p>{{book.title}}</p>
	</div>`
})

export class BookListComponent implements OnInit{
	books: Book[];

	constructor(private bookService: BookService){}

	ngOnInit(){
		this.books = this.bookService.getBooks();
		console.log(this.books);
	}
}