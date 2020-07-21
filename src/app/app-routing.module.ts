import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ManageComponent} from './modules/manage/pages/manage/manage.component';
import {LoginComponent} from './modules/login/pages/login/login.component';
import {SystemManageComponent} from './modules/manage/pages/system-manage/system-manage.component';


const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {
        path: 'manage', component: ManageComponent,
        children: [{
            path: 'system',
            component: SystemManageComponent
        }]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
