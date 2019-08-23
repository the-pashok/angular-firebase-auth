import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
    activeSlide = 0;

    toggleForm(n) {
        this.activeSlide = n;
    }

    constructor() {
    }

    ngOnInit() {
    }

}
