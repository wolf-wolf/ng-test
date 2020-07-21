import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import '../assets/style/layout.scss';
import { MatToolbarModule } from '@angular/material/toolbar';

const MAT_MODULES = [
    MatToolbarModule
]
@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ...MAT_MODULES
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
