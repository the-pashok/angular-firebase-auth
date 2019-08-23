import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar';

// firebase modules
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {environment} from '../environments/environment';

// components
import {AppComponent} from './app.component';
import {FormLoginComponent} from './components/form-login/form-login.component';
import {FormSignupComponent} from './components/form-signup/form-signup.component';
import {UserPageComponent} from './components/user-page/user-page.component';
import {RouterModule} from "@angular/router";
import { GreetingComponent } from './components/greeting/greeting.component';

@NgModule({
    declarations: [
        AppComponent,
        FormLoginComponent,
        FormSignupComponent,
        UserPageComponent,
        GreetingComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        AppRoutingModule,
        AngularFireAuthModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFirestoreModule,
        AngularFireStorageModule,
        RouterModule,
        BrowserAnimationsModule,
        MatSnackBarModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
