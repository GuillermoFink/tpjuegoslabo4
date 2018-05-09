import { Component, OnInit } from '@angular/core';
import { JuegoAdivina } from '../../clases/juego-adivina';
import swal from 'sweetalert2';
import { JugadorService } from '../../servicios/jugador.service';
import { HttpModule, Http } from '@angular/http';
import { MessageModule } from 'primeng/message';
import { GrowlModule, Growl } from 'primeng/growl';
import { Message } from 'primeng/components/common/api';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-anagrama',
  templateUrl: './anagrama.component.html',
  styleUrls: ['./anagrama.component.css']
})
export class AnagramaComponent implements OnInit {

  nuevoJuego: JuegoAdivina = new JuegoAdivina();
  oportunidades: number = 0;
  ocultarVerificar: boolean = false;
  Mensajes: string;

  nombreJugador: string;
  apodoJugador: string;
  idJugador: number;
  apellidoJugador: string;
  jugados: number;
  ganados: number;
  perdidos: number;

  mensaje: string;
  msgs: Message[] = [];

  constructor(private miJugador: JugadorService, private miHttp: Http) {
    this.nombreJugador = miJugador.GetNombre();
    this.apellidoJugador = miJugador.GetApellido();
    this.apodoJugador = miJugador.GetApodo();
    this.idJugador = miJugador.GetId();
    console.log(this.miJugador);
    this.TraerInformacionDeJuego();

    this.nuevoJuego.generarnumero();
    this.nuevoJuego.numeroIngresado = 0;
  }

  ngOnInit() {
  }
  generarnumero() {
    this.nuevoJuego.generarnumero();
    this.oportunidades = 0;
  }
  verificar() {
    this.jugados++;
    this.ganados++;
    this.oportunidades++;
    this.ocultarVerificar = true;

    console.info("numero Secreto:", this.nuevoJuego.gano);
    if (this.nuevoJuego.verificar()) {

      //this.enviarJuego.emit(this.nuevoJuego);
      this.MostarMensaje("Sos un Genio!!!", true);
      this.nuevoJuego.numeroSecreto = 0;
      swal(
        'Ganaste!',
        'En tan solo: '+this.oportunidades +' intentos',
        'success'
      )

    } else {
      
      this.jugados++;
      this.perdidos++;
      let mensaje: string;
      switch (this.oportunidades) {
        case 1:
          mensaje = "Intento fallido, animo";
          break;
        case 2:
          mensaje = "No,Te estaras Acercando???";
          break;
        case 3:
          mensaje = "No es, Yo crei que la tercera era la vencida.";
          break;
        case 4:
          mensaje = "No era el  " + this.nuevoJuego.numeroIngresado;
          break;
        case 5:
          mensaje = " intentos y nada.";
          break;
        case 6:
          mensaje = "Afortunado en el amor";
          break;

        default:
          mensaje = "Pifiaste " + this.oportunidades + " veces";
          break;
      }
      this.GuardarInformacionJuego();
      this.msgs = [];
      this.msgs.push({ severity: 'error', summary: "Numero Equivocado!", detail: mensaje+" Ayuda: "+" "+this.nuevoJuego.retornarAyuda() });
      this.MostarMensaje("#" + this.oportunidades + " " + mensaje + " ayuda :" + this.nuevoJuego.retornarAyuda());


    }
    console.info("numero Secreto:", this.nuevoJuego.gano);
  }

  MostarMensaje(mensaje: string = "este es el mensaje", ganador: boolean = false) {
    this.Mensajes = mensaje;
    var x = document.getElementById("snackbar");
    if (ganador) {
      x.className = "show Ganador";
    } else {
      x.className = "show Perdedor";
    }
    var modelo = this;
    setTimeout(function () {
      x.className = x.className.replace("show", "");
      modelo.ocultarVerificar = false;
    }, 2000);
    console.info("objeto", x);

  }

  TraerInformacionDeJuego() {
    let rta: any;
    let datos = { usuario: this.idJugador, juego: 2 };
    this.miHttp.post('http://localhost/APITPJUEGOS/api-master/DatosDeJuego', datos)
      .toPromise()
      .then(data => {
        rta = data.json();
        //console.log(data);
        this.jugados = rta[0]["jugados"];
        this.ganados = rta[0]["ganados"];
        this.perdidos = rta[0]["perdidos"];
      })
  }

  GuardarInformacionJuego() {
    let rta: any;
    let datos = { juego: 2, usuario: this.idJugador, nombre: 'adivina', jugados: this.jugados, ganados: this.ganados, empatados: 0, perdidos: this.perdidos };
    this.miHttp.post('http://localhost/APITPJUEGOS/api-master/ActualizarJuegoUsuario', datos)
      .toPromise()
      .then(data => {
        console.log(data);
      })
  }

}
