import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Rx";

import { Book } from "../book.model";
import { ProfileService } from "../profile.service";
import { BookList } from "../book-list.model";

@Component({
	selector: 'list-detail',
	templateUrl: 'list-details.component.html'
})

export class ListDetails implements OnInit, OnDestroy{

	private listId: string;
	selectedList: BookList;
	private subscription: Subscription;

	constructor(private profileService: ProfileService,
				private route: ActivatedRoute){}
	
	ngOnInit(){
		this.subscription = this.route.params.subscribe(
			(params: any) => {
				this.listId = params['id'];
				this.profileService.getBooksInList(this.listId)
					.subscribe((list: BookList) =>{
						this.selectedList = list;
					});
			}
		);
		console.log("List below");
		console.log(this.selectedList);
	}

	ngOnDestroy(){
		this.subscription.unsubscribe();
	}
}