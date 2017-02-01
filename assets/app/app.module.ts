import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { BooksComponent } from "./books/books.component";
import { BookListComponent } from "./books/book-list.component";
import { ProfileComponent } from "./books/profile.component";
import { routing } from "./app.routing";

@NgModule({
    declarations: [
	    AppComponent,
	    HeaderComponent,
	    FooterComponent,
	    BooksComponent,
	    BookListComponent,
	    ProfileComponent
    ],
    imports: [BrowserModule, routing],
    bootstrap: [AppComponent]
})
export class AppModule {

}