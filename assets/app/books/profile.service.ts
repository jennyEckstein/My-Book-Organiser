import { Injectable} from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import "rxjs/Rx";
import { Observable } from "rxjs";
import { User } from "../header/auth/user.model";
import { BookList } from "./book-list.model";

@Injectable()

export class ProfileService{

	

	constructor(private http: Http){}

	getProfileInfo(userId){
		const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
		return this.http.get('http://localhost:3000/auth/' + userId + token)
			.map((response: Response) =>{
				return response.json();
			}).catch((error: Response) => {
				return Observable.throw(error.json())
			})
	}

	addList(list: BookList){
		const headers = new Headers({'Content-Type': 'application/json','Accept': 'application/json'});
		const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
		const body = JSON.stringify(list);
		return this.http.post('http://localhost:3000/auth/addList' + token, body, {headers: headers})
		.map((response: Response) => response.json())
		.catch((error: Response) => Observable.throw(error.json()));
	}
}