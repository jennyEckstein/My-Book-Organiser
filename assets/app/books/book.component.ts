import { Component, Input } from "@angular/core";

import { BookService } from "./book.service";

import { Book } from "./book.model";

@Component({
	selector: 'app-book',
	templateUrl: 'book.component.html',
	styles: [`
		img{
			width: 100px;
		}
	`]
})

export class BookComponent{
	@Input() book: Book;
	color: 'gray';

	constructor(private bookService: BookService) {}

	getColor(){
		return 'gray';
	}

	onDelete(){
		this.bookService.deleteBook(this.book)
		.subscribe(result => console.log(result));
	}
}