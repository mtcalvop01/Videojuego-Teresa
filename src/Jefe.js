
import { MULTIPLICADOR_DANIO } from "./constants.js";
export class Jefe extends Enemigo{
    constructor(nombre, avatar, nivelAtaque, puntos, multiplicadorDanio = MULTIPLICADOR_DANIO){
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