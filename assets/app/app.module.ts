import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { BooksComponent } from "./books/books.component";
import { BookListComponent } from "./books/book-list.component";
import { ProfileComponent } from "./books/profile.component";
import { routing } from "./app.routing";
import { SigninComponent } from "./header/auth/signin.component";
import { SignupComponent } from "./header/auth/signup.component";
import { BookComponent } from "./books/book.component";
import { AddBookComponent } from "./books/add-book.component";

@NgModule({
    declarations: [
	    AppComponent,
	    HeaderComponent,
	    FooterComponent,
	    BooksComponent,
	    BookListComponent,
	    ProfileComponent,
	    SigninComponent,
	    SignupComponent,
	    BookComponent,
	    AddBookComponent
    ],
    imports: [BrowserModule, routing],
    bootstrap: [AppComponent]
})
export class AppModule {

}