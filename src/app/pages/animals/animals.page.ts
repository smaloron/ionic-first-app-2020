import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.page.html',
  styleUrls: ['./animals.page.scss'],
})
export class AnimalsPage implements OnInit {

  public animalList = [
    {
      title: 'Vache',
      image: '/images/animals/cow-icon.png',
      desc: 'Meugle',
      file: '/sounds/cow.mp3',
      playing: false
    },
    {
      title: 'Dauphin',
      image: '/images/animals/dolphin-icon.png',
      desc: 'Siffle',
      file: '/sounds/dolphin.mp3',
      playing: false
    },
    {
      title: 'Grenouille',
      image: '/images/animals/frog-icon.png',
      desc: 'Coasse',
      file: '/sounds/frog.mp3',
      playing: false
    },
    {
      title: 'Oiseau',
      image: '/images/animals/bird-icon.png',
      desc: 'Chante',
      file: '/sounds/bird.mp3',
      playing: false
    },
    {
      title: 'Cochon',
      image: '/images/animals/pig-icon.png',
      desc: 'Grogne',
      file: '/sounds/pig.mp3',
      playing: false
    },
    {
      title: 'Chien',
      image: '/images/animals/puppy-icon.png',
      desc: 'Aboie',
      file: '/sounds/dog.mp3',
      playing: false
    },
    {
      title: 'Chat',
      image: '/images/animals/black-cat-icon.png',
      desc: 'Miaule',
      file: '/sounds/cat.mp3',
      playing: false
    },
    {
      title: 'Cheval',
      image: '/images/animals/horse-icon.png',
      desc: 'Hennit',
      file: '/sounds/horse.wav',
      playing: false
    },
    {
      title: 'Ane',
      image: '/images/animals/donkey-icon.png',
      desc: 'Brait',
      file: '/sounds/donkey.wav',
      playing: false
    }
  ];

  // L'animal dont on a entendu le son
  public currentAnimal;

  // Un objet qui permet de jouer un son
  public media: HTMLAudioElement;

  constructor(private toastCtrl: ToastController) { 
  }

  // Clique sur le bouton jouer
  play() {
    // choix aléatoire d'un animal 
    // si aucun animal n'a été préalablement choisi
    if (!this.currentAnimal) {
      const index = Math.floor(Math.random() * this.animalList.length);
      this.currentAnimal = this.animalList[index];
    }

    // Si le son joue déjà on le met en pause
    if (this.media && this.media.currentTime > 0) {
      this.media.pause();
    }

    // Lecture du son
    this.media = new Audio('/assets' + this.currentAnimal.file);
    this.media.load();
    this.media.play();
  }

  // Fonction qui détermine si j'ai gagné ou perdu
  // au click sur un animal
  async guessAnimal(clickedAnimal) {
    let message;
    if (!this.currentAnimal) {
      message = 'Tu dois cliquer sur jouer pour gagner';
    }else if (clickedAnimal.title === this.currentAnimal.title) {
      message = 'gagné';
      this.currentAnimal = null;
    } else {
      message = 'perdu';
    }

    await this.showMessage(message);
  }

  /**
   * Affichage d'un message dans un toast
   * @param text : Le texte du message
   */
  private async showMessage(text) {
    const toast = await this.toastCtrl.create({
      message: text,
      duration: 5000,
      position: 'middle',
      color: 'danger'
    });

    toast.present();
  }

  ngOnInit() {
  }

}
