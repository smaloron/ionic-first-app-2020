// Imports de la page
// éléments dont on a besoin pour travailler
import { Component } from '@angular/core';

// Décorateur
// Configration de la classe qui représente l'écran
@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.page.html',
  styleUrls: ['./currency-converter.page.scss'],
})
export class CurrencyConverterPage {

  // Déclaration d'une variable de type number
  public euroAmount: number;

  // Déclaration et affectation d'une variable
  // inutile de préciser le type il est implicite
  // ici string
  public pageTitle = 'Conversion de devises';

  public favoriteColor = 'warning';

  public changeRate = 1.15;

  constructor() { 
    this.euroAmount = 5;
  }

  changeColor(color) {
    if (this.favoriteColor === 'warning') {
      this.favoriteColor = color;
    } else {
      this.favoriteColor = 'warning';
    }
  }

}
