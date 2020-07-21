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
import {ManageRoutingModule} from './manage-routing.module';

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
        ManageRoutingModule
    ]
})
export class ManageModule {
}
