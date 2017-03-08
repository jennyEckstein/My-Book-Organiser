import { Component } from '@angular/core';

import { BookService } from "./books/book.service";
import { AuthService } from "./header/auth/auth.service";
import { ProfileService } from "./books/profile.service";

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [BookService, AuthService, ProfileService]
})
export class AppComponent {

}