import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-form-signup',
    templateUrl: './form-signup.component.html',
    styleUrls: ['./form-signup.component.scss']
})
export class FormSignupComponent implements OnInit {
    @Output() activeIndex: EventEmitter<number> = new EventEmitter();
    signUpForm: FormGroup;
    formHeader = 'Sign up';
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private router: Router
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

    toggleForm(index) {
        this.activeIndex.emit(index);
    }

    onSubmit(data) {
        this.submitted = true;

        if (this.signUpForm.invalid) {
            console.log('invalid');
            return false;
        }

        this.authService.registerUser(data.email, data.password);
        this.toggleForm(1);
    }

    ngOnInit() {
    }
}
