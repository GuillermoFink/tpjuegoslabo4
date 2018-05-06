import { Component, OnInit } from '@angular/core';
import { HttpModule, Http } from '@angular/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  datos: any;
  mail: string;
  password: string;
  constructor(private miHttp: Http) {
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
    let datos = {mail: this.mail,password: this.password};
    this.miHttp.post('http://localhost/APITPJUEGOS/api-master/LoginUsuario', datos)
    .toPromise()
    .then(data =>{
      console.log(data.json());
      if (rta != null){
        alert("log");
      }else{
        alert("nolog");
      }
    })
  }
}
