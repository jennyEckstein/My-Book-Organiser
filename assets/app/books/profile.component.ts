import { Component, OnInit } from "@angular/core";

import { ProfileService } from "./profile.service";
import { User } from "../header/auth/user.model";

@Component ({
	selector: 'app-profile',
	templateUrl: 'profile.component.html'
})

export class ProfileComponent {

	profileInfo: User;
	bookList: string[] = [];

	constructor(private profileService: ProfileService){}

	ngOnInit(){
		//TODO: get user info		
		this.profileService.getProfileInfo(localStorage.getItem('userId'))
			.subscribe(
					data => console.log(data),
					error => console.log(error)
				);

	}

	/*addBookList(listName: string){
		console.log(listName);

		this.profileService.addList(listName)
		.subscribe(
			data => console.log(data),
			error => console.error(error)
		);		
	}*/
}