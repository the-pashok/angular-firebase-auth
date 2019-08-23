import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from '../../services/auth.service';

@Component({
    selector: 'app-form-login',
    templateUrl: './form-login.component.html',
    styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {
    loginForm: FormGroup;
    formHeader = 'Sign in';

    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService
    ) {
        this.loginForm = this.formBuilder.group({
            email: new FormControl('', Validators.compose([
                Validators.required,
                Validators.email
            ])),
            password: new FormControl('', Validators.compose([
                Validators.required,
                Validators.minLength(6)
            ]))
        });
    }

    ngOnInit() {
    }

    onSubmit(data) {
        this.authService.login(data.email, data.password);
    }
}
