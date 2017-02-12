import { Component, Input } from "@angular/core";

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

export class BookComponent {
	@Input() book: Book;
	color: 'gray';

	getColor(){
		return 'gray';
	}
}