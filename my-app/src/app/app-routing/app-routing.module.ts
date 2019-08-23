import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';

import {FormLoginComponent} from '../components/form-login/form-login.component';
import {FormSignupComponent} from '../components/form-signup/form-signup.component';
import {UserPageComponent} from '../components/user-page/user-page.component';

// guard
import {AuthGuardGuard} from '../guards/auth-guard.guard';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'sign-up'
    },
    {
        path: 'sign-up',
        component: FormSignupComponent,
    },
    {
        path: 'sign-in',
        component: FormLoginComponent
    },
    {
        path: 'user-page/:uid',
        component: UserPageComponent,
        canActivate: [AuthGuardGuard],
    },
    {path: '**', redirectTo: ''}
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ]
})
export class AppRoutingModule {
}
