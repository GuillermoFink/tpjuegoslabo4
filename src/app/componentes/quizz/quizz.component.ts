import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { MessageModule } from 'primeng/message';
import { GrowlModule, Growl } from 'primeng/growl';
import { Message } from 'primeng/components/common/api';
import { TableModule } from 'primeng/table';
import { JugadorService } from '../../servicios/jugador.service';
import { HttpModule, Http } from '@angular/http';
import { Quizz } from '../../clases/quizz';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent implements OnInit {
  miQuizz: Quizz = new Quizz("1","1","1","1","1",1,"1");
  miArrayDeQuizz: Quizz[];
  
  ruta: string = "../../../assets/Imagenes/piedra.jpg";
  constructor() {
    this.miArrayDeQuizz = this.miQuizz.ArrayDePreguntas();
    console.log(this.miArrayDeQuizz);
   }
  
  ngOnInit() {
  }
  

}
