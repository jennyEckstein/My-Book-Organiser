import { Routes, RouterModule } from "@angular/router";

import { BooksComponent } from "./books/books.component";
import { ProfileComponent } from "./books/profile.component";


const APP_ROUTER: Routes = [
	{path: '', redirectTo: '/books', pathMatch: 'full'},
	{path: 'books', component: BooksComponent},
	{path: 'profile', component: ProfileComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTER);