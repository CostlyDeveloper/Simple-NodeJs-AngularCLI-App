import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LayoutModule } from '../layout/layout.module';


@NgModule({
    declarations: [
        HomeComponent
    ],
    imports     : [
        CommonModule,
        LayoutModule
    ]
})
export class PagesModule {}
