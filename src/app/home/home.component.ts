import { Component } from '@angular/core';
import {Row} from "./shared";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {

  rows: Row[] = [
  {
    srcLeft: "assets/desk-position.jpg",
    textRight: "Ergo conception des postes de travail pour les entreprises",

    srcRight: "/assets/ep.jpg",
    textLeft: "Ergo Santé : une gamme adaptée aux établissements de santé",

  },
  {
    srcLeft: "/assets/table-ergo-technik.jpg",
    textRight: "Du mobilier adapté aux personnes à mobilité réduite",

    srcRight: "/assets/HAG-Futu-8.jpg",
    textLeft: "Du mobilier d'entreprise qui dure dans le temps ",

  }
];

}
