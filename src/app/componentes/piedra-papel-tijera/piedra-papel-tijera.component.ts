import { Component, OnInit } from '@angular/core';
import  swal  from 'sweetalert2';
import {MessageModule} from 'primeng/message';


@Component({
  selector: 'app-piedra-papel-tijera',
  templateUrl: './piedra-papel-tijera.component.html',
  styleUrls: ['./piedra-papel-tijera.component.css']
})
export class PiedraPapelTijeraComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  test(){
    swal(
      'TITULO',
      'MENSAJE',
      'success'
    )
  }
}
