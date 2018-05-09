import { Component, OnInit } from '@angular/core';
import { JugadorService } from '../../servicios/jugador.service';
import { HttpModule, Http } from '@angular/http';
import {TableModule} from 'primeng/table';

@Component({
  selector: 'app-puntajes',
  templateUrl: './puntajes.component.html',
  styleUrls: ['./puntajes.component.css']
})
export class PuntajesComponent implements OnInit {
  nombreJugador: string;
  apodoJugador: string;
  idJugador: number;
  apellidoJugador: string;
  puntajeIndividual: any;
  tablaPuntaje: any;

  constructor(private miJugador: JugadorService, private miHttp: Http) { 
    this.nombreJugador = miJugador.GetNombre();
    this.apellidoJugador = miJugador.GetApellido();
    this.apodoJugador = miJugador.GetApodo();
    this.idJugador = miJugador.GetId();
    this.puntajeIndividual = this.MostrarPuntajePorJugador();
    this.tablaPuntaje = this.TraerPuntajes();
  }

  ngOnInit() {
  }

  MostrarPuntajePorJugador(){
    let rta: any;
    let datos = { usuario: this.idJugador};
    this.miHttp.post('http://localhost/APITPJUEGOS/api-master/PuntajePorJugador', datos)
      .toPromise()
      .then(data => {
        rta = data.json();
        console.log(rta);
        this.puntajeIndividual = rta;
        
      })
  }
  TraerPuntajes(){
    this.miHttp.get('http://localhost/APITPJUEGOS/api-master/TodosLosPuntajes')
      .toPromise()
      .then(data => {
        console.log(data.json());
        this.tablaPuntaje = data.json();
      })
  }
}
