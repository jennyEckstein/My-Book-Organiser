import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { BooksComponent } from "./books/books.component";

@NgModule({
    declarations: [
	    AppComponent,
	    HeaderComponent,
	    FooterComponent,
	    BooksComponent
    ],
    imports: [BrowserModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}