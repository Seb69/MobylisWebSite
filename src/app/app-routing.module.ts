import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home';
import {PrestationComponent} from './+prestation';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'prestation', component: PrestationComponent },
  { path: 'accessories', loadChildren: './+accessories/accessories.module#AccessoriesModule'},
  { path: 'seat', loadChildren: './+seat/seat.module#SeatModule'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
