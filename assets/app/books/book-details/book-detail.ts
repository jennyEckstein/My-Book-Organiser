import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs/Rx";
import { ActivatedRoute  } from "@angular/router";

import { Book } from "../book.model";
import { BookService } from "../book.service";

@Component({
	selector: 'book-detail',
	templateUrl: 'book-detail.html'
})

export class BookDetail implements OnInit, OnDestroy{

	private bookId: string;
	selectedBook: Book;
	private subscription: Subscription;

	constructor(private bookService: BookService,
		private route: ActivatedRoute ){}

ngOnInit(){
	this.subscription = this.route.params.subscribe(
			(params: any) => {
		this.bookId = params['id'];

		this.bookService.getBook(this.bookId)
			.subscribe((book: Book) => {
		this.selectedBook = book;
		});	
	});
}

	ngOnDestroy(){
		this.subscription.unsubscribe();
	}
	
}