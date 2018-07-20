import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  private pontuacao: number = 0;
  private ajudaUtilizada: boolean = false;

  constructor() { }

  ngOnInit() {
    this.cronometro();
  }

  marcarPonto(reply) {
    if (this.ajudaUtilizada) {
      this.pontuacao += 5;
      this.ajudaUtilizada = false;
    } else {
      this.pontuacao += 10;
    }
  }

  verDetalhes(status) {
    this.ajudaUtilizada = status;
  }

  cronometro() {
    let intervalo;
    let second = 59;
    let minute = 1;

    intervalo = window.setInterval(() => {
      if (second == 0) { minute--; second = 59; }

      if (second < 10) {
        document.getElementById("segundo").innerHTML = "0" + second;
      } else {
        document.getElementById("segundo").innerHTML = second.toString();
      } 

      if (minute < 10) document.getElementById("minuto").innerHTML = "0" + minute + ":";

      second--;
    }, 1000);
  }
}
