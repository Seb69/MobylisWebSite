import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PrestationComponent} from './+prestation/prestation.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'prestation', component: PrestationComponent },
  { path: 'health', loadChildren: './+health/health.module#HealthModule' }
];

@NgModule({
  declarations: [
    HomeComponent,
    PrestationComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
