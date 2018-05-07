import { Injectable } from '@angular/core';
import { Jugador } from '../clases/jugador';

@Injectable({
  providedIn: 'root'
})
export class JugadorService {

  constructor(private miJugador: Jugador) { }

  GetId(){
    return this.miJugador.id;
  }
  SetId(id){
    this.miJugador.id = id;
  }

  GetNombre(){
    return this.miJugador.nombre;
  }
  SetNombre(nombre){
    this.miJugador.nombre = nombre;
  }
  
  GetApodo(){
    return this.miJugador.nickname;
  }
  SetApodo(apodo){
    this.miJugador.nickname = apodo;
  }

  GetMail(){
    return this.miJugador.mail;
  }
  SetMail(mail){
    this.miJugador.mail = mail;
  }

  GetApellido(){
    return this.miJugador.apellido;
  }
  SetApellido(apellido){
    this.miJugador.apellido = apellido;
  }
  
  GetJuego1Jugados(){
    return this.miJugador.juego1jugados;
  }
  SetJuego1Jugados(jugados){
    this.miJugador.juego1jugados = jugados;
  }

  GetJuego1Ganados(){
   return this.miJugador.juego1ganados;
  }
  SetJuego1Ganados(ganados){
    this.miJugador.juego1ganados = ganados;
  }

  GetJuego1Empatados(){
    return this.miJugador.juego1empatados;
  }
  SetJuego1Empatados(empates){
    this.miJugador.juego1empatados = empates;
  }

  GetJuego1Perdidos(){
    return this.miJugador.juego1perdidos;
  }
  SetJuego1Perdidos(perdidos){
    this.miJugador.juego1perdidos=perdidos;
  }

  GetJuego2Jugados(){
    return this.miJugador.juego2jugados;
  }
  SetJuegos2Jugados(jugados){
    this.miJugador.juego2jugados = jugados;
  }
  
  GetJuego2Ganados(){
    return this.miJugador.juego2ganados;
  }
  SetJuego2Ganados(ganados){
    this.miJugador.juego2ganados = ganados;
  }
  GetJuego2Perdidos(){
    return this.miJugador.juego2perdidos;
  }
  SetJuego2Perdidos(perdidos){
    this.miJugador.juego2perdidos = perdidos;
  }

  GetJuego3Jugados(){
    return this.miJugador.juego3jugados;
  }
  SetJuego3Jugados(jugados){
    this.miJugador.juego3jugados = jugados;
  }

  GetJuego3Ganados(){
    return this.miJugador.juego3ganados;
  }
  SetJuego3Ganados(ganados){
    this.miJugador.juego3ganados = ganados;
  }
  GetJuego3Perdidos(){
    return this.miJugador.juego3perdidos;
  }
  SetJuego3Perdido(perdidos){
    this.miJugador.juego3perdidos = perdidos;
  }
}
