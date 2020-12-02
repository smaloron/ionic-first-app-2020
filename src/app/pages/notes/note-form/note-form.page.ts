import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NoteInterface, NoteListService } from 'src/app/services/note-list.service';

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

  constructor(private noteService: NoteListService, private router: Router) { }

  ngOnInit() {
  }

  validate() {
    
    // Sauvegarde de la note
    this.noteService.save(this.note);
    // Retour à la liste des notes
    this.router.navigateByUrl('note-list');
  }

}
