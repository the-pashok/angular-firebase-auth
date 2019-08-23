import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';

import {FormComponent} from '../components/form/form.component';
import {UserPageComponent} from '../components/user-page/user-page.component';

const routes: Routes = [
    {
        path: '',
        component: FormComponent,
        pathMatch: 'full'
    },
    {
        path: 'user-page',
        component: UserPageComponent
    }
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
