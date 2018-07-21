import { Component, OnInit, ViewChild } from '@angular/core';
import { GenericServiceService } from './shared/generic-service.service';

import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BoxPersonageComponent } from './shared/box-personage/box-personage.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  private pontuation: number = 0;
  private helpUsed: boolean = false;
  private personages: Array<any> = [];
  private indicePersonage: number = 0;
  private repliedCorrect: boolean = false;
  private actualPage: number = 1;
  private previousPage: number = 0;
  private nextPage: number = 2;
  private accessPage: number = 0;

  @ViewChild(BoxPersonageComponent)
  modalResult: BoxPersonageComponent;

  constructor(private service: GenericServiceService) { }

  ngOnInit() {
    this.cronometro();
    this.getPersonages(this.actualPage);
  }

  getPersonages(actualPage): void {
    this.personages = [];
    this.service.getPersonages(actualPage)
      .subscribe(
        res => {
          this.personages.push(res["results"]);
          this.personages[0].pop();
          this.personages[0].pop();
        }
      )

    console.log(this.personages);
  }

  setPontuation(reply, personage) {
    if (reply.toUpperCase() == personage.toUpperCase()) {
      this.repliedCorrect = true;
      if (this.helpUsed) {
        this.pontuation += 5;
        this.helpUsed = false;
      } else {
        this.pontuation += 10;
      }
    }
  }

  setDetail(status) {
    if (status) this.helpUsed = status;
  }

  cronometro() {
    let intervalo;
    let second = 59;
    let minute = 1;

    intervalo = window.setInterval(() => {
      if (minute == 0 && second == 0) {
        clearInterval(intervalo);
        this.modalResult.openModalResult(this.pontuation);
      } else if (second == 0) {
        minute--; second = 59;
      }

      if (second < 10) {
        document.getElementById("segundo").innerHTML = "0" + second;
      } else {
        document.getElementById("segundo").innerHTML = second.toString();
      }

      if (minute < 10) document.getElementById("minuto").innerHTML = "0" + minute + ":";

      second--;
    }, 1000);
  }

  previousPersonage() {
    if (this.actualPage > 1) {
      this.previousPage--;
      this.nextPage = this.actualPage;
      this.actualPage--;

      this.getPersonages(this.actualPage);
    }
  }

  nextPersonage() {
    this.nextPage++;
    this.previousPage = this.actualPage;
    this.actualPage++;

    this.getPersonages(this.actualPage);
  }

  setPage(page) {
    this.actualPage = page;
    this.nextPage = page += 1;
    this.previousPage = page-= 2;

    this.getPersonages(this.actualPage);
  }
}
