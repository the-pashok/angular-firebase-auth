import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {FormComponent} from './components/form/form.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { FormSignupComponent } from './components/form-signup/form-signup.component';

@NgModule({
    declarations: [
        AppComponent,
        FormComponent,
        FormLoginComponent,
        FormSignupComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
