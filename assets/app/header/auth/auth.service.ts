import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs";
import "rxjs/Rx";

import { User } from "./user.model";

@Injectable()
export class AuthService {

	currentUser: User;

	constructor(private http: Http){}

	signup(user: User){
		const body = JSON.stringify(user);
		const headers = new Headers({'Content-Type': 'application/json'});
		return this.http.post('http://localhost:3000/auth/signup', body, {headers: headers})
		.map((response: Response) => {		
			return response.json();
		})
		.catch((error: Response) => {
			return Observable.throw(error.json())
		})		
	}

	signin(user: User){
		console.log("Signing IN service");
		console.log(user);
		const body = JSON.stringify(user);
		const headers = new Headers({'Content-Type': 'application/json'});
		return this.http.post('http://localhost:3000/auth/signin', body, {headers:headers})
		.map((response: Response) => {
			response.json();
			this.currentUser = JSON.parse(response.json());
			console.log("Storing user locally");
			console.log(this.currentUser);
		})
		.catch((error: Response) => Observable.throw(error.json()) )

	}

	logout(){
		localStorage.clear();
	}
}