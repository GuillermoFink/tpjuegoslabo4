import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { MessageModule } from 'primeng/message';
import { GrowlModule, Growl } from 'primeng/growl';
import { Message } from 'primeng/components/common/api';
import { TableModule } from 'primeng/table';
import { JugadorService } from '../../servicios/jugador.service';
import { HttpModule, Http } from '@angular/http';


@Component({
  selector: 'app-piedra-papel-tijera',
  templateUrl: './piedra-papel-tijera.component.html',
  styleUrls: ['./piedra-papel-tijera.component.css']
})
export class PiedraPapelTijeraComponent implements OnInit {
  rutapc: string = "../../../assets/Imagenes/piedra.jpg";
  rutaj1: string = "../../../assets/Imagenes/piedra.jpg";
  eleccionP1: string = "";
  eleccionPc: string = "";
  nombreJugador: string;
  apodoJugador: string;
  idJugador: number;
  apellidoJugador: string;
  random: number;
  jugados: number;
  ganados: number;
  empatados: number;
  perdidos: number;
  porcentaje: number = 0;
  mensaje: string;
  msgs: Message[] = [];
  constructor(private miJugador: JugadorService, private miHttp: Http) {
    this.nombreJugador = miJugador.GetNombre();
    this.apellidoJugador = miJugador.GetApellido();
    this.apodoJugador = miJugador.GetApodo();
    this.idJugador = miJugador.GetId();
    console.log(this.miJugador);
    this.TraerInformacionDeJuego();
  }

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
    this.eleccionP1 = "";
    this.eleccionPc = "";
    console.log(numero);
    this.random = Math.floor(Math.random() * 3) + 1;
    document.getElementById('pcPiedra').classList.remove('w3-grayscale-max');
    document.getElementById('pcPapel').classList.remove('w3-grayscale-max');
    document.getElementById('pcTijera').classList.remove('w3-grayscale-max');
    switch (this.random) {
      case 1:
        this.eleccionPc = "../../../assets/Imagenes/piedra.jpg";
        document.getElementById('pcPiedra').classList.add('w3-grayscale-max');
        break;
      case 2:
        this.eleccionPc = "../../../assets/Imagenes/papel.jpg";
        document.getElementById('pcPapel').classList.add('w3-grayscale-max');
        break;
      case 3:
        this.eleccionPc = "../../../assets/Imagenes/tijera.jpg";
        document.getElementById('pcTijera').classList.add('w3-grayscale-max');
        break;
    }
    switch (numero) {
      case 1:
        this.eleccionP1 = "../../../assets/Imagenes/piedra.jpg";
        if (this.random == 1) {
          this.jugados++;
          this.empatados++;
          this.mensaje = "Empatados!";
        }
        if (this.random == 2) {
          this.jugados++;
          this.perdidos++;
          this.mensaje = "Ganador: PC!";
        }
        if (this.random == 3) {
          this.ganados++;
          this.jugados++;
          this.mensaje = "Ganador: " + this.apodoJugador + "!";
        }
        break;
      case 2:
      this.eleccionP1 = "../../../assets/Imagenes/papel.jpg";
        if (this.random == 1) {
          this.jugados++;
          this.ganados++;
          this.mensaje = "Ganador: " + this.apodoJugador + "!";
        }
        if (this.random == 2) {
          this.jugados++;
          this.empatados++;
          this.mensaje = "Empatados!";
        }
        if (this.random == 3) {
          this.perdidos++;
          this.jugados++;
          this.mensaje = "Ganador: PC!";
        }
        break;
      case 3:
      this.eleccionP1 = "../../../assets/Imagenes/tijera.jpg";
        if (this.random == 1) {
          this.jugados++;
          this.perdidos++;
          this.mensaje = "Ganador: PC!";
        }
        if (this.random == 2) {
          this.jugados++;
          this.ganados++;
          this.mensaje = "Ganador: " + this.apodoJugador + "!";
        }
        if (this.random == 3) {
          this.empatados++;
          this.jugados++;
          this.mensaje = "Empatados!";
        }
        break;
    }
    this.GuardarInformacionJuego();
    this.DesplegarMensaje(this.mensaje);
    this.porcentaje = Math.round((this.ganados / this.jugados) * 100);
  }
  DesplegarMensaje(condicion: string) {
    condicion = condicion.trim();
    switch (condicion) {
      case 'Ganador: PC!':
        this.msgs = [];
        this.msgs.push({ severity: 'error', summary: condicion, detail: 'No sumaste esta ronda!' });
        break;
      case 'Empatados!':
        this.msgs = [];
        this.msgs.push({ severity: 'warn', summary: condicion, detail: 'Nadie suma!' });
        break;
      default:
        this.msgs = [];
        this.msgs.push({ severity: 'success', summary: condicion, detail: 'Sumaste 1 punto!' });
        break;
    }
  }
  GuardarInformacionJuego() {
    let rta: any;
    let datos = { juego: 1, usuario: this.idJugador, nombre: 'ppt', jugados: this.jugados, ganados: this.ganados, empatados: this.empatados, perdidos: this.perdidos };
    this.miHttp.post('http://localhost/APITPJUEGOS/api-master/ActualizarJuegoUsuario', datos)
      .toPromise()
      .then(data => {
        console.log(data);
      })
  }
  TraerInformacionDeJuego() {
    let rta: any;
    let datos = { usuario: this.idJugador, juego: 1 };
    this.miHttp.post('http://localhost/APITPJUEGOS/api-master/DatosDeJuego', datos)
      .toPromise()
      .then(data => {
        rta = data.json();
        //console.log(data);
        this.jugados = rta[0]["jugados"];
        this.empatados = rta[0]["empatados"];
        this.ganados = rta[0]["ganados"];
        this.perdidos = rta[0]["perdidos"];
      })
  }
}
