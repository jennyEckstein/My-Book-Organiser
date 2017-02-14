import { Component, OnInit } from "@angular/core";

import { Book } from "./book.model";
import { BookService } from "./book.service";
import { BookComponent } from "./book.component";

@Component ({
	selector: 'app-book-list',
	template: `<div>
	
	<a [routerLink]="['/books/add']"> Add Book</a>
	<app-book
		*ngFor="let book of books"
		[book]="book">
		</app-book>
	</div>`
})

export class BookListComponent implements OnInit{
	books: Book[];

	constructor(private bookService: BookService){}

	ngOnInit(){
		this.bookService.getBooks()
		.subscribe((books: Book[]) =>{
			this.books = books;
		});
		console.log(this.books);
	}
}