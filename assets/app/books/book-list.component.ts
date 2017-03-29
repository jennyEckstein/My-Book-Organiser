import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Book } from "./book.model";
import { BookService } from "./book.service";
import { BookComponent } from "./book.component";

@Component ({
	selector: 'app-book-list',
	template: `
	<div class="col-md-8 row col-md-offset-2">	
		<div class="col-md-11 form-group">
			<input type="text" id="search" class="form-control">
		</div>
		<div class="col-md-1" >
			<button class="btn btn-primary" (click)="add()">Add Book</button>		
		</div>
	</div>
	<app-book
		*ngFor="let book of books"
		[book]="book">
		</app-book>
	`
})

export class BookListComponent implements OnInit{
	books: Book[];

	constructor(private bookService: BookService,
				private router: Router){}

	ngOnInit(){
		this.bookService.getBooks()
		.subscribe((books: Book[]) =>{
			this.books = books;
		});
	}

	add(){
		this.router.navigate(['/books/add']);
	}
}