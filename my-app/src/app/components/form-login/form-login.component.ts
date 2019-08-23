import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
    selector: 'app-form-login',
    templateUrl: './form-login.component.html',
    styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {
    @Output() activeIndex: EventEmitter<number> = new EventEmitter();
    loginForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder
    ) {
        this.loginForm = this.formBuilder.group({
            email: new FormControl(''),
            password: new FormControl('')
        });
    }

    ngOnInit() {
    }

    onSubmit() {

    }

    toggleForm(index) {
        this.activeIndex.emit(index);
    }
}
