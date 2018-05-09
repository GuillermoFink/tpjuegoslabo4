import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ppt: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  infoPpt() {
    swal({
      imageUrl: '../../../assets/Imagenes/info_ppt.jpg',
      imageHeight: 300,
      imageAlt: 'Instrucciones'
    })
  }
  infoAdNum() {
    swal({
      title: "Instrucciones",
      text: "Ingresa un numero, confirmalo con el botón y averigua si es el secreto!",
      imageUrl: '../../../assets/Imagenes/info_adnum.jpg',
      imageHeight: 300,
      imageAlt: 'Instrucciones'
    })
  }
  infoQuiz() {
    swal({
      title: "Instrucciones",
      text: "Contesta eligiendo las opciones, necesitas mas de un 60% de efectividad para ganar!",
      imageUrl: '../../../assets/Imagenes/info_quizz.jpg',
      imageHeight: 300,
      imageAlt: 'Instrucciones'
    })
  }
  juegarppt(){
    this.ppt = true;
  }
}
