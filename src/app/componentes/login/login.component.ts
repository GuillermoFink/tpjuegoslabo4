import { Component, OnInit } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  datos: any;
  mail: string;
  password: string;
  constructor(private miHttp: Http, private route: Router) {
    this.miHttp.get('http://localhost/APITPJUEGOS/api-master/traerTodosLosUsuarios')
      .toPromise()
      .then(data => {
        console.log(data.json());
      })
    /*.subscribe(data => {
      this.datos = data.json();
      console.log(data.json());
      console.log("*****");
      console.log(data['_body']);
    })*/
  }

  ngOnInit() {
  }
  LoginUsuario() {
    let rta: any;
    let nombre;
    let datos = { mail: this.mail, password: this.password };
    this.miHttp.post('http://localhost/APITPJUEGOS/api-master/LoginUsuario', datos)
      .toPromise()
      .then(data => {
        rta = data.json();
        try {
          nombre = rta[0]["nombre"];
        } catch{
          nombre = null;
        }
        console.log(data.json());
        console.log("**");
        if (nombre != null) {
          swal({
            title: 'Bienvenido ' + nombre,
            text: 'Accediendo a la plataforma de juegos!.',
            timer: 2000,
            onOpen: () => {
              swal.showLoading()
            }
          }).then((result) => {
            if (
              // Read more about handling dismissals
              result.dismiss === swal.DismissReason.timer
            ) {
              console.log('I was closed by the timer')
            }
            this.route.navigate(['home']);
          })
        } else {
          swal(
            'Error',
            'Usuario o contraseña invalidos',
            'error'
          )
        }
      })
  }
}
