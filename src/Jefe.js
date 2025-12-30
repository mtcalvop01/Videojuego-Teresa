import { MULTIPLICADOR_DANIO } from "./constants.js";
import { Enemigo } from "./Enemigos.js";
export class Jefe extends Enemigo{
    constructor(nombre, avatar, nivelAtaque, puntos, multiplicadorDanio = MULTIPLICADOR_DANIO){
        super(nombre, avatar, "Jefe", nivelAtaque, puntos);
        this.multiplicadorDanio = multiplicadorDanio;
    }

    getMultiplicadorDanio(){
        return this.multiplicadorDanio;
    }

    setMultiplicadorDanio(multiplicadorDanio){
        this.multiplicadorDanio = multiplicadorDanio;
    }
}