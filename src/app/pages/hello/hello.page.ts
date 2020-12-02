import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.page.html',
  styleUrls: ['./hello.page.scss'],
})
export class HelloPage implements OnInit {

  public name = "Inconnu";

  constructor(private route: ActivatedRoute) { 
    this.name = route.snapshot.paramMap.get('name');
  }

  ngOnInit() {
  }

}
