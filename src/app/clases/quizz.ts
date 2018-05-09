import { Self } from "@angular/core";

export class Quizz {
    numero: number;
    imagen: string;
    pregunta: string;
    opcion1: string;
    opcion2: string;
    opcion3: string;
    opcion4: string;
    correcta: number;


    constructor(numero: number,pregunta: string, opcion1: string, opcion2: string, opcion3: string, opcion4: string, correcta: number, imagen: string) {
        this.numero = numero;
        this.imagen = imagen;
        this.pregunta = pregunta;
        this.opcion1 = opcion1;
        this.opcion2 = opcion2;
        this.opcion3 = opcion3;
        this.opcion4 = opcion4;
        this.correcta = correcta;

    }


    ArrayDePreguntas() {
       let preg1 = new Quizz(1,"¿Que naciones conforman el grupo A?",
            "Rusia - Arabia Saudita - Egipto - Uruguay",
            "Rusia - Arabia Saudita - Mexico - Uruguay",
            "Rusia - Iran - Egipto - Uruguay",
            "Rusia - Uruguay - Egipto - Marruecos",
            1,
            "../../../assets/Imagenes/p1.jpg");
       let preg2 = new Quizz(2,"¿Cual es el estadio con mayor capacidad?",
            "San Petesburgo",
            "Rostov Arena",
            "Luzhniki",
            "Kalingrado",
            3,
            "../../../assets/Imagenes/p2.jpeg");
       let preg3 = new Quizz(3,"¿Como se llama la pelota del mundial?",
            "Jabulani",
            "Tango",
            "Brazuca",
            "Telstar",
            4,
            "../../../assets/Imagenes/p3.jpg");
       let preg4 = new Quizz(4,"¿En que estadio se jugará la final del mundial?",
            "Spartak",
            "Luzhniki",
            "San Petesburgo",
            "Samara Arena",
            2,
            "../../../assets/Imagenes/p4.jpg");
       let preg5 = new Quizz(5,"¿Que naciones conforman el grupo G?",
            "Belgica - Panama - Tunez - Nigeria",
            "Inglaterra - Panama - Mexico - Suecia",
            "Belgica - Panama - Tunez - Inglaterra",
            "Belgica - Panama - Senegal - Suecia",
            3,
            "../../../assets/Imagenes/p5.jpg");
       let preg6 = new Quizz(6,"¿Quien es el goleador actual de la historia de los mundiales?",
            "Diego Armando Maradona",
            "Pele",
            "Miroslav Klose",
            "Gerhard Müller",
            3,
            "../../../assets/Imagenes/p6.jpg");
        let misPreguntas: Quizz[] = new Array();
        misPreguntas.push(preg1);
        misPreguntas.push(preg2);
        misPreguntas.push(preg3);
        misPreguntas.push(preg4);
        misPreguntas.push(preg5);
        misPreguntas.push(preg6);

        return misPreguntas;
    }
}
