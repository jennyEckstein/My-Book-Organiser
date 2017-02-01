import { Routes, RouterModule } from "@angular/router";

import { BooksComponent } from "./books/books.component";
import { ProfileComponent } from "./books/profile.component";
import { SigninComponent } from "./header/auth/signin.component";
import { SignupComponent } from "./header/auth/signup.component";

const APP_ROUTER: Routes = [
	{path: '', redirectTo: '/books', pathMatch: 'full'},
	{path: 'books', component: BooksComponent},
	{path: 'profile', component: ProfileComponent},
	{path: 'signin', component: SigninComponent},
	{path: 'signup', component: SignupComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTER);