export class JuegoAdivina {
    numeroSecreto: number = 0;
    numeroIngresado: number = 0;
    gano = false;

    public verificar() {
        if (this.numeroIngresado == this.numeroSecreto) {
            this.gano = true;
        }
        if (this.gano) {
            return true;
        }
        else {
            return false;
        }
    }
    public generarnumero() {
        this.numeroSecreto = Math.floor((Math.random() * 10) + 1);
        console.info('numero Secreto:' + this.numeroSecreto);
        this.gano = false;
    }
    public retornarAyuda() {
        if (this.numeroIngresado < this.numeroSecreto) {
            return "Un poco más";
        }
        return "Un poco menos";
    }
}
