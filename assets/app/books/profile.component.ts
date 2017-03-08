import { Component } from "@angular/core";

import { ProfileService } from "./profile.service";

@Component ({
	selector: 'app-profile',
	templateUrl: 'profile.component.html'
})

export class ProfileComponent {

	constructor(private profileService: ProfileService){}

	addBookList(listName: string){
		console.log(listName);

		this.profileService.addList(listName)
		.subscribe(
			data => console.log(data),
			error => console.error(error)
		);		
	}
}