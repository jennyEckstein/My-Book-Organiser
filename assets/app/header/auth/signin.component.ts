import { Component, OnInit } from "@angular/core";
import {
	FormGroup,
	FormControl,
	ReactiveFormsModule,
	Validators
} from "@angular/forms";
import { AuthService } from "./auth.service";
import { User } from "./user.model";
import { Router } from "@angular/router";


@Component ({
	selector: 'app-signin',
	templateUrl: 'signin.component.html'
})

export class SigninComponent implements OnInit {
	signInForm: FormGroup;

	constructor(private authService: AuthService,
				private router: Router) {}

	onSubmit(){
		console.log("Signing IN");
		const user = new User(
			this.signInForm.value.email,
			this.signInForm.value.password);
		console.log("Passing user");
		console.log(user);
		this.authService.signin(user)
		.subscribe(
			data => {
				localStorage.setItem('token', data.token)
				localStorage.setItem('userId', data.userId)
				this.router.navigateByUrl('/');
		},
			error => console.log(error)		
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