import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import '@angular/compiler';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';

import '../assets/style/layout.scss';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';
import {ManageModule} from './modules/manage/manage.module';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        ManageModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatSidenavModule,
        MatIconModule,
        FormsModule,
        MatListModule,
        MatTableModule,
        MatPaginatorModule,
        MatButtonModule,
        MatToolbarModule,
        MatSlideToggleModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
