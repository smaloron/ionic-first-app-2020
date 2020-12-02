import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.page.html',
  styleUrls: ['./note-list.page.scss'],
})
export class NoteListPage implements OnInit {

  public noteList = [
    { title: 'Première note', text: 'Lorem ipsum', id: 1 },
    { title: 'Deuxième note', text: 'Dolor sit amet', id: 2 },
    { title: 'Troisième note', text: 'bla bal', id: 3 }
  ];

  constructor() { }

  ngOnInit() {
  }

}
