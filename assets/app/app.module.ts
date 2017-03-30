import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";

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
import { BookDetail } from "./books/book-details/book-detail";
import { ListDetails } from "./books/list-details/list-details.component";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import "rxjs/Rx";

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
	    AddBookComponent,
	    BookDetail,
	    ListDetails
    ],
    imports: [HttpModule, BrowserModule, routing, FormsModule, ReactiveFormsModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}