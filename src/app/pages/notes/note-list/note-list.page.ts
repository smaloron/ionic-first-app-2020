import { Component, OnInit } from '@angular/core';
import { NoteListService } from 'src/app/services/note-list.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.page.html',
  styleUrls: ['./note-list.page.scss'],
})
export class NoteListPage implements OnInit {

  public noteList = [];

  constructor(private noteService: NoteListService) {
    this.noteList = this.noteService.findAll();
  }

  ngOnInit() {
  }

}
