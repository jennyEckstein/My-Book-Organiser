import { Component, OnInit } from "@angular/core";
import {
	FormGroup,
	FormControl,
	ReactiveFormsModule,
	Validators
} from "@angular/forms";
import { AuthService } from "./auth.service";
import { User } from "./user.model";


@Component ({
	selector: 'app-signin',
	templateUrl: 'signin.component.html'
})

export class SigninComponent implements OnInit {
	signInForm: FormGroup;

	constructor(private authService: AuthService) {}

	onSubmit(){
		const user = new User(
			this.signInForm.value.email,
			this.signInForm.value.password);
		this.authService.signin(user)
		.subscribe({
			data => localStorage.setItem('token', data.token)},
			error => console.error(error)			
		);
		this.signInForm.reset();
	}

	ngOnInit() {
		this.signInForm = new FormGroup({
			email: new FormControl(null, Validators.required),
			password: new FormControl(null, Validators.required)
		});
	}
}