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
      text: "Pour être sûr d'acheter le bon siège, nous vous proposons de l'essayer gratuitement pendant une semaine.",
      srcRight: "assets/chairs2.svg",

    }
  ];
}
