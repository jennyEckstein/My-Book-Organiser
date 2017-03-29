import { Routes, RouterModule } from "@angular/router";

import { BooksComponent } from "./books/books.component";
import { ProfileComponent } from "./books/profile.component";
import { SigninComponent } from "./header/auth/signin.component";
import { SignupComponent } from "./header/auth/signup.component";
import { AddBookComponent } from "./books/add-book.component";
import { BookDetail } from "./books/book-details/book-detail";

import { BOOK_ROUTES } from "./books/book.routes";

const APP_ROUTER: Routes = [	
	{path: '', redirectTo: '/books', pathMatch: 'full'},
	{path: 'books', component: BooksComponent},
	{path: 'books/add', component: AddBookComponent},
	{path: 'books/:id', component: BookDetail},
	{path: 'profile', component: ProfileComponent},
	{path: 'auth/signin', component: SigninComponent},
	{path: 'auth/signup', component: SignupComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTER);