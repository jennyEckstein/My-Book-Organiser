import { Component, OnInit } from "@angular/core";
import { 
	FormGroup, 
	FormControl, 
	Validators, 
	ReactiveFormsModule } from "@angular/forms";

import { AuthService } from "./auth.service";
import { User } from "./user.model";

@Component ({
	selector: 'app-signup',
	templateUrl: 'signup.component.html'
})

export class SignupComponent implements OnInit{
	signupForm: FormGroup;

	constructor(private authService: AuthService){}

	onSubmit(){
		const user = new User(
			this.signupForm.value.firstName, 
			this.signupForm.value.lastName, 
			this.signupForm.value.email, 
			this.signupForm.value.password
		);

		console.log(user);
		this.authService.signup(user)
		.subscribe(
				data => console.log(data),
				error => console.log(error)
			);
		this.signupForm.reset();
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