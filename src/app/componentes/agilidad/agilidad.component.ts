import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agilidad',
  templateUrl: './agilidad.component.html',
  styleUrls: ['./agilidad.component.css']
})
export class AgilidadComponent implements OnInit {
  numero1: number;
  numero2: number;
  resultado: number;

  constructor() { }

  ngOnInit() {
  }

  CountDown() {
    var timeleft = 10;
    var temp;
    var downloadTimer = setInterval(function () {
      temp = parseInt((<HTMLInputElement>document.getElementById("progressBar")).value);
      temp = 10 - --timeleft;
      (<HTMLInputElement>document.getElementById('progressBar')).value = temp;
      if (timeleft <= 0) {
        clearInterval(downloadTimer);
      }
    }, 500);
    this.ValidarCount(timeleft);
  }
  ValidarCount(timeleft){
    var rto = '0';
    if (timeleft < 1){
      (<HTMLInputElement>document.getElementById('progressBar')).value = rto;
    }
  }

}
