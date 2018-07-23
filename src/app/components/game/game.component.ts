import { Component, OnInit, ViewChild } from '@angular/core';
import { GenericServiceService } from './shared/generic-service.service';

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
  private actualPage: number = 1;
  private previousPage: number = 0;
  private nextPage: number = 2;
  private restart: boolean = false;

  @ViewChild(BoxPersonageComponent)
  modalResult: BoxPersonageComponent;

  constructor(private service: GenericServiceService) { }

  ngOnInit() {
    this.cronometro(); // Start the clock
    this.getPersonages(this.actualPage); // Load the personages by page
  }

  // Method main of the game. Get the personages and set the respective image his
  getPersonages(actualPage): void {
    this.personages = [];
    let path = `assets/img/personage/page${actualPage}/`;

    this.service.getPersonages(actualPage)
      .subscribe(
        res => {
          this.personages.push(res["results"]);
          this.personages[0].pop();
          this.personages[0].pop();

          // I use the name of the image like this, because is more easy of set for all
          if (this.actualPage < 9) { 
            this.personages[0][0]["path_image"] = path + "01-min.jpg";
            this.personages[0][1]["path_image"] = path + "02-min.jpg";
            this.personages[0][2]["path_image"] = path + "03-min.jpg";
            this.personages[0][3]["path_image"] = path + "04-min.jpg";
            this.personages[0][4]["path_image"] = path + "05-min.jpg";
            this.personages[0][5]["path_image"] = path + "06-min.jpg";
            this.personages[0][6]["path_image"] = path + "07-min.jpg";
            this.personages[0][7]["path_image"] = path + "08-min.jpg";
          } else { // The last page of the API don't have 8 personages
            this.personages[0][0]["path_image"] = path + "01-min.jpg";
            this.personages[0][1]["path_image"] = path + "02-min.jpg";
            this.personages[0][2]["path_image"] = path + "03-min.jpg";
            this.personages[0][3]["path_image"] = path + "04-min.jpg";
            this.personages[0][4]["path_image"] = path + "05-min.jpg";
          }
        }
      )
  }

  // This method set pontuation on scoreboard
  setPontuation(reply, personage) {
    if (reply.toUpperCase() == personage.toUpperCase()) {
      if (this.helpUsed) {
        this.pontuation += 5;
        this.helpUsed = false;
      } else {
        this.pontuation += 10;
      }
    }
  }

  // If the player to see the details the pontuation is set for 5
  setDetail(status) {
    if (status) this.helpUsed = status;
  }

  cronometro() {
    let intervalo;
    let second = 59;
    let minute = 1;
    this.pontuation = 0;

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

  // Method for pagination. Navigation previous
  previousPersonage() {
    if (this.actualPage > 1) {
      this.previousPage--;
      this.nextPage = this.actualPage;
      this.actualPage--;

      this.getPersonages(this.actualPage);
    }
  }

  // Method for pagination. Navigation next
  nextPersonage() {
    this.nextPage++;
    this.previousPage = this.actualPage;
    this.actualPage++;

    this.getPersonages(this.actualPage);
  }

  // Case the player click some option of the pagination
  setPage(page) {
    this.actualPage = page;
    this.nextPage = page += 1;
    this.previousPage = page -= 2;

    this.getPersonages(this.actualPage);
  }
}