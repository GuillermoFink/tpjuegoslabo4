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

}
