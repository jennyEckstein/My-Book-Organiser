import { Component, OnInit } from "@angular/core";
import { 
	FormGroup, 
	FormControl, 
	Validators, 
	ReactiveFormsModule } from "@angular/forms";


@Component ({
	selector: 'app-signup',
	templateUrl: 'signup.component.html'
})

export class SignupComponent implements OnInit{
	signupForm: FormGroup;

	onSubmit(){

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