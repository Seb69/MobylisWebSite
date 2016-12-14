import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeatComponent } from './seat.component';
import {SeatRoutingModule} from "./seat-routing.module";

@NgModule({
  imports: [
    CommonModule,
    SeatRoutingModule
  ],
  declarations: [SeatComponent]
})
export class SeatModule{ }
