import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { MessageModule } from 'primeng/message';
import { GrowlModule, Growl } from 'primeng/growl';
import { Message } from 'primeng/components/common/api';
import {TableModule} from 'primeng/table';


@Component({
  selector: 'app-piedra-papel-tijera',
  templateUrl: './piedra-papel-tijera.component.html',
  styleUrls: ['./piedra-papel-tijera.component.css']
})
export class PiedraPapelTijeraComponent implements OnInit {
  random: number;
  jugados: number = 0;
  ganados: number = 0;
  empatados: number = 0;
  perdidos: number = 0;
  porcentaje: number = 0;
  mensaje: string;
  msgs: Message[] = [];
  constructor() { }

  ngOnInit() {
  }
  test() {
    swal(
      'TITULO',
      'MENSAJE',
      'success'
    )
  }
  Jugada(numero: number) {
    console.log(numero);
    this.random = Math.floor(Math.random() * 3) + 1;
    document.getElementById('pcPiedra').classList.remove('w3-grayscale-max');
    document.getElementById('pcPapel').classList.remove('w3-grayscale-max');
    document.getElementById('pcTijera').classList.remove('w3-grayscale-max');
    switch(this.random){
      case 1:
      document.getElementById('pcPiedra').classList.add('w3-grayscale-max');
      break;
      case 2:
      document.getElementById('pcPapel').classList.add('w3-grayscale-max');
      break;
      case 3:
      document.getElementById('pcTijera').classList.add('w3-grayscale-max');
      break;
    }
    switch (numero) {
      case 1:
        if (this.random == 1) {
          this.jugados++;
          this.empatados++;
          this.mensaje = "Empatados!";
        }
        if (this.random == 2) {
          this.jugados++;
          this.perdidos++;
          this.mensaje = "Perdiste!";
        }
        if (this.random == 3) {
          this.ganados++;
          this.jugados++;
          this.mensaje = "Ganaste!";
        }
        break;
      case 2:
        if (this.random == 1) {
          this.jugados++;
          this.ganados++;
          this.mensaje = "Ganaste!";
        }
        if (this.random == 2) {
          this.jugados++;
          this.empatados++;
          this.mensaje = "Empatados!";
        }
        if (this.random == 3) {
          this.perdidos++;
          this.jugados++;
          this.mensaje = "Perdiste!";
        }
        break;
      case 3:
        if (this.random == 1) {
          this.jugados++;
          this.perdidos++;
          this.mensaje = "Perdiste!";
        }
        if (this.random == 2) {
          this.jugados++;
          this.ganados++;
          this.mensaje = "Ganaste!";
        }
        if (this.random == 3) {
          this.empatados++;
          this.jugados++;
          this.mensaje = "Empatados!";
        }
        break;
    }
    this.DesplegarMensaje(this.mensaje);
    this.porcentaje = Math.round((this.ganados/this.jugados)*100);
  }
  DesplegarMensaje(condicion: string) {
    condicion = condicion.trim();
    switch (condicion) {
      case 'Ganaste!':
        this.msgs = [];
        this.msgs.push({ severity: 'success', summary: condicion, detail: 'Sumaste 1 punto!' });
        break;
      case 'Perdiste!':
        this.msgs = [];
        this.msgs.push({ severity: 'error', summary: condicion, detail: 'No sumaste esta ronda!' });
        break;
      case 'Empatados!':
        this.msgs = [];
        this.msgs.push({ severity: 'warn', summary: condicion, detail: 'Nadie suma!' });
        break;
    }
  }
  
}
