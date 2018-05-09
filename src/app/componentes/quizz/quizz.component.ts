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
  miQuizz: Quizz = new Quizz(1,"1","1","1","1","1",1,"1");
  miArrayDeQuizz: Quizz[];
  respondidas: number = 0;
  correctas: number = 0;
  fallidas: number = 0;
  faltantes: number= 7;
  promedio: number;

  nombreJugador: string;
  apodoJugador: string;
  idJugador: number;
  apellidoJugador: string;
  jugados: number;
  ganados: number;
  perdidos: number;
  
  ruta: string = "../../../assets/Imagenes/piedra.jpg";
  constructor(private miJugador: JugadorService, private miHttp: Http) {
    this.nombreJugador = this.miJugador.GetNombre();
    this.apodoJugador = this.miJugador.GetApodo();
    this.idJugador = this.miJugador.GetId();
    this.TraerDatosDeJuego();

    this.miArrayDeQuizz = this.miQuizz.ArrayDePreguntas();
    console.log(this.miArrayDeQuizz);
   }
  
  ngOnInit() {
  }
  Respuesta(pregunta: Quizz, opcion: number){
    if (pregunta.correcta == opcion){
      this.respondidas++;
      this.correctas++;
      this.faltantes--;
      this.promedio = Math.round((this.correctas/this.respondidas)*100);
      document.getElementById(pregunta.numero.toString()).setAttribute("hidden","true");
    }else{
      this.respondidas++;
      this.fallidas++;
      this.promedio = Math.round((this.correctas/this.respondidas)*100);
      document.getElementById(pregunta.numero.toString()).setAttribute("hidden","true");
    }
    this.ValidarRespuestas();
  }
  ValidarRespuestas(){
    if (this.respondidas == 6){
      //<<>
      if (this.correctas > 5){
        this.jugados++;
        this.ganados++;
        swal(
          'Ganaste!',
          'Felicitaciones por tu conocimiento sobre el próximo mundial!',
          'success'
        )
        this.GuardarInformacionJuego();
      }
      if(this.correctas <= 4 && this.correctas > 2 ){
        this.jugados++;
        this.perdidos++;
        swal(
          'No esta tan mal',
          'A ponerse al día con el mundial!',
          'info'
        )
        this.GuardarInformacionJuego();
      }
      if(this.correctas <=2 ){
        this.jugados++;
        this.perdidos++;
        swal(
          'Perdiste!',
          'Recomendamos YA! sintonizar ESPN',
          'error'
        )
        this.GuardarInformacionJuego();
      }
      
    }
  }
  TraerDatosDeJuego(){
    let rta: any;
    let datos = { usuario: this.idJugador, juego: 3 };
    this.miHttp.post('http://localhost/APITPJUEGOS/api-master/DatosDeJuego', datos)
      .toPromise()
      .then(data => {
        rta = data.json();
        console.log(data);
        this.jugados = rta[0]["jugados"];
        this.ganados = rta[0]["ganados"];
        this.perdidos = rta[0]["perdidos"];
      })
  }
  GuardarInformacionJuego() {
    let rta: any;
    let datos = { juego: 3, usuario: this.idJugador, nombre: 'quizz', jugados: this.jugados, ganados: this.ganados, empatados: 0, perdidos: this.perdidos };
    this.miHttp.post('http://localhost/APITPJUEGOS/api-master/ActualizarJuegoUsuario', datos)
      .toPromise()
      .then(data => {
        console.log(data);
      })
  }

}
