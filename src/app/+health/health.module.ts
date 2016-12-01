import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HealthComponent } from './health.component';
import {HealthRoutingModule} from "./health-routing.module";

@NgModule({
  imports: [
    CommonModule,
    HealthRoutingModule
  ],
  declarations: [HealthComponent]
})
export class HealthModule { }
