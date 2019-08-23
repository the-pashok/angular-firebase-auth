import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-greeting',
    templateUrl: './greeting.component.html',
    styleUrls: ['./greeting.component.scss']
})
export class GreetingComponent implements OnInit {
    mainHeader = 'Hello Friend!';
    pseudoHeader = 'Enter your personal data and start journey with us!';

    constructor() {
    }

    ngOnInit() {
    }

}
