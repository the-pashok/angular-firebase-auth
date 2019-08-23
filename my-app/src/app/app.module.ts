import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing/app-routing.module';

// firebase modules
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {environment} from '../environments/environment';

// components
import {AppComponent} from './app.component';
import {FormComponent} from './components/form/form.component';
import {FormLoginComponent} from './components/form-login/form-login.component';
import {FormSignupComponent} from './components/form-signup/form-signup.component';
import {UserPageComponent} from './components/user-page/user-page.component';
import {RouterModule} from "@angular/router";

@NgModule({
    declarations: [
        AppComponent,
        FormComponent,
        FormLoginComponent,
        FormSignupComponent,
        UserPageComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        AppRoutingModule,
        AngularFireAuthModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFirestoreModule,
        AngularFireStorageModule,
        RouterModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
