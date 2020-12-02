import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoteInterface, NoteListService } from 'src/app/services/note-list.service';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.page.html',
  styleUrls: ['./note-details.page.scss'],
})
export class NoteDetailsPage implements OnInit {


  public note: NoteInterface;

  constructor(private route: ActivatedRoute,
              private noteService: NoteListService) {
    // Récupération de l'identifiant passé en paramètre de la route
    const id = parseInt(route.snapshot.paramMap.get('id'), 10);
    // récupération de la note depuis le service
    this.note = this.noteService.findOneById(id);

  }

  ngOnInit() {
  }

}
