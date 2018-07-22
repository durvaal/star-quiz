import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  private phraseDarth: Array<any> = [
    { frase: "Sua falta de fé é perturbadora.", author: "Darth Vader" },
    { frase: "Luke, eu sou seu pai!", author: "Darth Vader" },
    { frase: "Você está controlando seu medo, agora libere a sua raiva. Só o seu ódio poderá destruir-me.", author: "Darth Vader" },
    { frase: "Você. Você está com medo. Que você nunca vai ser tão forte quanto Darth Vader.", author: "Darth Vader" },
    { frase: "Você não conhece o poder do lado negro.", author: "Darth Vader" },
  ];

  private showPhrase = this.phraseDarth[0]; 
  constructor() { }

  ngOnInit() {
    this.setPhrase();
  }

  setPhrase() {
    let count = 1;
    const interval = window.setInterval(() => {
      if (count <= 4) {
        this.showPhrase = this.phraseDarth[count];
        count++
      } else {
        count = 0;
      }
    }, 5000);
  }
}