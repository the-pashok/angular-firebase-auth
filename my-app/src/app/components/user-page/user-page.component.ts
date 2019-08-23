import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
    selector: 'app-user-page',
    templateUrl: './user-page.component.html',
    styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

    constructor(
        private authService: AuthService
    ) {
    }

    ngOnInit() {
    }

    logout() {
        this.authService.logout();
    }

}
