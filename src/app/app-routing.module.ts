import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutFrameComponent } from './blueprint/main-layout-frame/main-layout-frame.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [{
    path     : '',
    component: MainLayoutFrameComponent,
    children : [
        {
            path     : '',
            component: HomeComponent
        }
    ]
}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
