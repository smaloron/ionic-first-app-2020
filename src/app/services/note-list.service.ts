import { Injectable } from '@angular/core';

export interface NoteInterface {
  title: string;
  text: string;
  id: number;
}

@Injectable({
  providedIn: 'root'
})
export class NoteListService {

  // Liste des notes
  // un tableau ordinal d'objets de type NoteInterface
  private noteList: NoteInterface[] = [
    { title: 'Première note', text: 'Lorem ipsum', id: 1 },
    { title: 'Deuxième note', text: 'Dolor sit amet', id: 2 },
    { title: 'Troisième note', text: 'bla bal', id: 3 }
  ];

  constructor() { }

  /**
   * Retourne la liste de toutes les notes
   */
  findAll(): NoteInterface[] {
    return this.noteList;
  }

  /**
   * Retourne une note en fonction de son id
   * @param id 
   */
  findOneById(id): NoteInterface {
    /*
    let note;
    for (let item of this.noteList) {
      if (item.id == id) {
        note = item;
        break;
      }
    }
    */
    // Recherche d'une note dans la liste en fonction de son id
    // La méthode find adement en argument une fonction callback
    // qui retourne true quand la note est trouvée
    const note: NoteInterface = this.noteList.find((item) => item.id == id);

    return note;
  }

  /**
   * Enregistrement de la note
   * @param note
   */
  save(note: NoteInterface) {
    // Nouvelle note car id == null
    if (note.id == null) {
      // Affecter un id à la note
      note.id = new Date().getTime();

      // Ajout de la note au tableau des notes
      this.noteList.push(note);
    }
  }

  // Suppression d'une note
  delete(id) {
    // Récupérer la position de la note dans le tableau
    const index = this.noteList.findIndex((item) => item.id == id);
    // Suppression de la note dans le tableau
    this.noteList.splice(index, 1);
  }
}
