import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeLayout1Component } from './home-layout1/home-layout1.component';


@NgModule({
    declarations: [HomeLayout1Component],
    exports     : [
        HomeLayout1Component
    ],
    imports     : [
        CommonModule
    ]
})
export class LayoutModule {}
