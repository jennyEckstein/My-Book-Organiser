import { Component, OnInit } from "@angular/core";

import { ProfileService } from "./profile.service";
import { User } from "../header/auth/user.model";
import { BookList } from "./book-list.model";


@Component ({
	selector: 'app-profile',
	templateUrl: 'profile.component.html'
})

export class ProfileComponent {

	profileInfo: User;

	constructor(private profileService: ProfileService){}



	ngOnInit(){
		//TODO: get user info		
		this.profileService.getProfileInfo(localStorage.getItem('userId'))
			.subscribe(
					data => {
						console.log("HERE IS UPDATED USER");
						console.log(data.obj)
						this.profileInfo = data.obj
					},
					error => console.log(error)
				);
	}

	addBookList(listName: string){
		var date = "03/13/2017";
		var userId = localStorage.getItem('userId');
		//this.profileInfo.lists.push(listName);
		const list = new BookList(
			listName, date, userId
		);
		this.profileService.addList(list)
		.subscribe(
			data => console.log(data),
			error => console.error(error)
		);		
	}
}