import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlueprintModule } from './blueprint/blueprint.module';
import { PagesModule } from './pages/pages.module';
import { LayoutModule } from './layout/layout.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports     : [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        BlueprintModule,
        PagesModule,
        LayoutModule
    ],
    providers   : [],
    bootstrap   : [AppComponent]
})
export class AppModule {}
