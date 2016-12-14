import { Component } from '@angular/core';
import {SideRow} from "../shared";

@Component({
  selector: 'app-prestation',
  templateUrl: './prestation.component.html',
  styleUrls: ['./prestation.component.scss']
})
export class PrestationComponent  {

  rows: SideRow[] = [
    {
      srcLeft: "assets/chairs1.svg",
      text: "Prêt de sièges pour tester nos solutions",
      srcRight: "assets/chairs2.svg",

    }
  ];
}
