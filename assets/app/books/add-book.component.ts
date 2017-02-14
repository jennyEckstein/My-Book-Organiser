import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from "@angular/forms";

import { Book } from "./book.model";
import { BookService } from "./book.service";

@Component ({
	selector: 'app-add-book',
	templateUrl: 'add-book.component.html'
})

export class AddBookComponent implements OnInit{
	bookForm: FormGroup;

	constructor(private bookService: BookService){}

	onSubmit(){
		const book = new Book(
			this.bookForm.value.isbn,
			this.bookForm.value.title,
			this.bookForm.value.imageUrl,
			this.bookForm.value.description,
			this.bookForm.value.author
		);

		this.bookService.addBook(book)
		.subscribe(
			data => console.log(data),
			error => console.error(error)
		);
		this.bookForm.reset();
	}

	ngOnInit (){
		this.bookForm = new FormGroup({
			isbn: new FormControl(null, Validators.required),
			title: new FormControl(null, Validators.required),
			imageUrl: new FormControl(null, Validators.required),
			description: new FormControl(null, Validators.required),
			author: new FormControl(null, Validators.required)
		});
	}
}