import { Component, OnInit } from "@angular/core";
import { 
	FormGroup, 
	FormControl, 
	Validators, 
	ReactiveFormsModule } from "@angular/forms";
import { Router } from "@angular/router";

import { AuthService } from "./auth.service";
import { User } from "./user.model";

@Component ({
	selector: 'app-signup',
	templateUrl: 'signup.component.html'
})

export class SignupComponent implements OnInit{
	signupForm: FormGroup;

	constructor(private authService: AuthService,
				private router: Router){}

	onSubmit(){
		var lists:string[] = [];

		const user = new User(
			this.signupForm.value.email, 
			this.signupForm.value.password,
			this.signupForm.value.firstName, 
			this.signupForm.value.lastName,
			lists
		);

		console.log(user);
		this.authService.signup(user)
		.subscribe(
				data => console.log(data),
				error => console.log(error)
			);
		this.signupForm.reset();
		this.router.navigateByUrl('/auth/signin');
	}

	ngOnInit(){
		this.signupForm = new FormGroup({
			firstName: new FormControl(null, Validators.required),
			lastName: new FormControl(null, Validators.required),
			email: new FormControl(null, Validators.required),
			password: new FormControl(null, Validators.required)
		});
	}
}