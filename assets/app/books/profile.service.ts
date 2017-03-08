import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import "rxjs/Rx";
import { Observable } from "rxjs";
import { User } from "../header/auth/user.model";

@Injectable()

export class ProfileService{

	bookList: string[] = [];

	constructor(private http: Http){}

	addList(bookList: string){
		const headers = new Headers({'Content-Type': 'application/json','Accept': 'application/json'});
		const userName = localStorage.getItem("userid");
	
		return this.http.post('http://localhost:3000/auth/' + userName, bookList, {headers: headers})
		.map((response: Response) => response.json())
		.catch((error: Response) => Observable.throw(error.json()));
	}
}