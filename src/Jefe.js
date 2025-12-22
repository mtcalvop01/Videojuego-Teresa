export class Jefe extends Enemigo{
    constructor(nombre, avatar, nivelAtaque, puntos, multiplicadorDanio = 1.2){
        super(nombre, avatar, nivelAtaque, puntos);
        this.multiplicadorDanio = multiplicadorDanio;
    }

    getMultiplicadorDanio(){
        return this.multiplicadorDanio;
    }

    setMultiplicadorDanio(multiplicadorDanio){
        this.multiplicadorDanio = multiplicadorDanio;
    }
}