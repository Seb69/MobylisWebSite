import { Component } from '@angular/core';
import {SingleRow} from "../shared/single-row";

@Component({
  selector: 'accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.scss']
})
export class AccessoriesComponent {

  rows: SingleRow[] = [
    {
      src: "assets/souris-verticale.jpg",
      text: "Souris verticales : une position naturelle qui suit votre articulation",

    }
  ];
}
