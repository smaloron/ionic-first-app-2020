import { Component, OnInit } from '@angular/core';
import { NoteInterface } from 'src/app/services/note-list.service';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.page.html',
  styleUrls: ['./note-form.page.scss'],
})
export class NoteFormPage implements OnInit {

  public note: NoteInterface = {
    title: '',
    text: '',
    id: null
  };

  constructor() { }

  ngOnInit() {
  }

  validate() {
    console.log(this.note);
  }

}
