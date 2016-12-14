import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessoriesComponent} from './accessories.component';
import {AccessoriesRoutingModule} from "./accessories-routing.module";

@NgModule({
  imports: [
    CommonModule,
    AccessoriesRoutingModule
  ],
  declarations: [AccessoriesComponent]
})
export class AccessoriesModule { }
