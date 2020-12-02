import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public linkList = [
    { label: 'Formulaire', path: '/form' },
    { label: 'Animaux', path: '/animals' },
    { label: 'Convertisseur de devises', path: '/currency-converter' },
    { label: 'Convertisseur de température', path: '/temperature-converter' },
    { label: 'Hello Seb', path: '/hello/seb' },
    { label: 'Hello Maev', path: '/hello/maev' },
    { label: 'Liste des notes', path: 'note-list'}
  ];

  constructor(private router: Router) { }
  
  goToPage(link) {
    this.router.navigateByUrl(link.path);
  }

}
