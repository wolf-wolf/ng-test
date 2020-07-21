import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ManageComponent} from './pages/manage/manage.component';
import {SystemManageComponent} from './pages/system-manage/system-manage.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {RouterModule, Routes} from '@angular/router';

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
    declarations: [
        ManageComponent,
        SystemManageComponent
    ],
    imports: [
        CommonModule,
        MatToolbarModule,
        MatTableModule,
        MatIconModule,
        MatButtonModule,
        MatPaginatorModule,
        MatSidenavModule,
        MatListModule,
        RouterModule.forChild(routes)
    ]
})
export class ManageModule {
}
