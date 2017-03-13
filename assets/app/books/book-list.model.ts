export class BookList{
	constructor(public listName: string,
							public createdDate: string,
							public userRef: string,
							public bookRefs?: string[]) {}
}