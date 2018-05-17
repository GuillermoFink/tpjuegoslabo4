import { Component, OnInit } from '@angular/core';
import { JugadorService } from '../../servicios/jugador.service';
import { HttpModule, Http } from '@angular/http';
import { TableModule } from 'primeng/table';
import { ChartModule } from 'primeng/chart';

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
  data: any;
  arrayPuntos: number[] = new Array();
  arrayLabels: string[] = new Array();

  constructor(private miJugador: JugadorService, private miHttp: Http) {
    this.nombreJugador = miJugador.GetNombre();
    this.apellidoJugador = miJugador.GetApellido();
    this.apodoJugador = miJugador.GetApodo();
    this.idJugador = miJugador.GetId();
    this.puntajeIndividual = this.MostrarPuntajePorJugador();
    this.tablaPuntaje = this.TraerPuntajes();
    this.data = {

      datasets: [{
        data: [
          this.arrayPuntos
        ],
        backgroundColor: [
          "#FF6384",
          "#4BC0C0",
          "#FFCE56",
          "#E7E9ED",
          "#36A2EB"
        ],
        label: 'My dataset'
      }],
      labels: [
        this.arrayLabels
      ]
    }
  }

  ngOnInit() {
  }

  MostrarPuntajePorJugador() {
    let rta: any;
    let datos = { usuario: this.idJugador };
    this.miHttp.post('http://lacuevadel10.16mb.com/API/PuntajePorJugador', datos)
      .toPromise()
      .then(data => {
        rta = data.json();
        console.log(rta);
        this.puntajeIndividual = rta;

      })
  }
  TraerPuntajes() {
    let rs: any;
    this.miHttp.get('http://lacuevadel10.16mb.com/API/TodosLosPuntajes')
      .toPromise()
      .then(data => {
        console.log(data.json());
        this.tablaPuntaje = data.json();
        this.CalcularChart();
      })
  }
  CalcularChart() {
    this.tablaPuntaje.forEach(element => {
      //console.log(element);
      if(element.nombre == "ppt"){
        this.arrayLabels.push(element.apodoJugador);
        this.arrayPuntos.push(element.ganados);
      }
    });
  }
}
