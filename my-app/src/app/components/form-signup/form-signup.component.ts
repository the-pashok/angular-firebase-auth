import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from '../../services/auth.service';

@Component({
    selector: 'app-form-signup',
    templateUrl: './form-signup.component.html',
    styleUrls: ['./form-signup.component.scss']
})
export class FormSignupComponent implements OnInit {
    signUpForm: FormGroup;
    formHeader = 'Sign up';
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService
    ) {
        this.signUpForm = this.formBuilder.group({
            email: new FormControl('', Validators.compose([
                Validators.required,
                Validators.email
            ])),
            password: new FormControl('', Validators.compose([
                Validators.required,
                Validators.minLength(6)
            ])),
            repeatPassword: new FormControl('', Validators.required),
        }, {
            validator: this.matchingPasswords('password', 'repeatPassword')
        });
    }

    get f() { return this.signUpForm.controls; }

    matchingPasswords(pass, confirm) {
        return (group: FormGroup) => {
            if (group.controls[pass].value === group.controls[confirm].value) {
                return null;
            } else {
                return {'matchingPasswords': true};
            }
        }
    }

    onSubmit(data) {
        this.submitted = true;

        if (this.signUpForm.invalid) {
            alert('Invalid data');
            return false;
        }

        this.authService.registerUser(data.email, data.password);
    }

    ngOnInit() {
    }
}
