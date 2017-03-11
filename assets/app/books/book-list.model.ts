export class BookList{
	constructor(public listName: string,
							public createdDate: Date,
							public userRef: string,
							public bookRefs: string[]) {}
}