import { Self } from "@angular/core";

export class Quizz {
    numero: number;
    imagen: string;
    pregunta: string;
    opciones: string[] = new Array();
    quizz: Quizz[]=new Array();

    constructor(pregunta, opciones, imagen=null){
        this.pregunta = pregunta;
        this.opciones = opciones;
        this.imagen = imagen;
    }
    
    p1: Quizz = new Quizz(
        "¿Que nacione conforman el grupo A del próximo mundial a disputarse en Rusia?",
        "",
        "");
}
