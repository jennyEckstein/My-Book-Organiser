import { Injectable } from "@angular/core";

import { Book } from "./book.model";

@Injectable()

export class BookService{
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
		return this.books;
	}

}