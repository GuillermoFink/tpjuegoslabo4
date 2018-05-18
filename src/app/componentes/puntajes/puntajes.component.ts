import { Component, OnInit } from '@angular/core';
import { JugadorService } from '../../servicios/jugador.service';
import { HttpModule, Http } from '@angular/http';
import { TableModule } from 'primeng/table';
import { ChartModule } from 'primeng/chart';
import {SelectButtonModule} from 'primeng/selectbutton';
import {SelectItem} from 'primeng/api';

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
  datosJugados: any;
  arrayPuntos: number[] = new Array();
  arrayLabels: string[] = new Array();
  arrayJugados: number[] = new Array();
  items: SelectItem[];
  itemSelecto: any;

  constructor(private miJugador: JugadorService, private miHttp: Http) {
    this.nombreJugador = miJugador.GetNombre();
    this.apellidoJugador = miJugador.GetApellido();
    this.apodoJugador = miJugador.GetApodo();
    this.idJugador = miJugador.GetId();
    this.puntajeIndividual = this.MostrarPuntajePorJugador();
    this.tablaPuntaje = this.TraerPuntajes();
    this.items=[
      {label: "PPT",value:"ppt"},
      {label: "Adivina",value:"adivina"},
      {label: "Quizz", value:"quizz"}
    ]
      
    
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
        this.CalcularChart("ppt");
        this.CalcularChartJugados();
        this.datosChart(this.arrayLabels,this.arrayPuntos);
        this.datosChart1(this.arrayLabels,this.arrayJugados);
        console.log("____");
        console.log(this.datosJugados);
      })
  }
  CalcularChart(nombreJuego) {
    this.arrayLabels = new Array();
    this.arrayPuntos = new Array();
    this.tablaPuntaje.forEach(element => {
      //console.log(element);
      if (element.nombre == nombreJuego) {
        this.arrayLabels.push(element.apodoJugador);
        this.arrayPuntos.push(element.ganados);
      }
    });
  }
  CalcularChartJugados() {
    this.tablaPuntaje.forEach(element => {
      //console.log(element);
      if (element.nombre == "adivina") {
        //this.arrayLabels.push(element.apodoJugador);
        this.arrayJugados.push(element.ganados);
      }
    });
  }
  datosChart(labels, datos) {
    this.data = new Array();
    this.data = {
      labels:
        //this.arrayLabels
        labels
      ,
      datasets: [{
        data:
          datos
        //this.arrayPuntos
        ,
        backgroundColor: [
          "#FF6384",
          "#4BC0C0",
          "#FFCE56",
          "#BBCE56",
          "#F00E56",
        ],
      }]
    }
  }

  datosChart1(labels, datos) {
    this.datosJugados = {
      labels:
        //this.arrayLabels
        labels
      ,
      datasets: [{
        data:
          datos
        //this.arrayPuntos
        ,
        backgroundColor: [
          "#FF6384",
          "#4BC000",
          "#FFCE56",
        ],
      }]
    }
  }

  UpdatePie(){
    console.log(this.itemSelecto);
    this.CalcularChart(this.itemSelecto);
    this.datosChart(this.arrayLabels,this.arrayPuntos);
  }
}
