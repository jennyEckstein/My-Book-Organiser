export class Book {
	constructor( 
				public isbn: string,
				public title: string,
				public imageUrl: string,
				public description: string,
				public author: string,
				public book_id?: string){}
}
