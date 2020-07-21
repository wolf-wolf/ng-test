import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ManageComponent} from './pages/manage/manage.component';
import {SystemManageComponent} from './pages/system-manage/system-manage.component';

const routes: Routes = [
    {
        path: '', component: ManageComponent,
        children: [
            {
                path: 'system', // child route path
                component: SystemManageComponent // child route component that the router renders
            },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ManageRoutingModule {
}
