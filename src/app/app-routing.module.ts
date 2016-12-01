import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home';
import {PrestationComponent} from './+prestation';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'prestation', component: PrestationComponent },
  { path: 'health', loadChildren: './+health/health.module#HealthModule'},
  { path: 'contact', loadChildren: './+contact/contact.module#ContactModule'}
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
