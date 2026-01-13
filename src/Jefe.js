import { MULTIPLICADOR_DANIO } from "./constants.js";
import { Enemigo } from "./Enemigos.js";
/**
 * Representa a un jefe (enemigo avanzado) en el juego.
 * Hereda de {@link Enemigo}
 */
export class Jefe extends Enemigo {
    /**
     * Crea un nuevo Jefe.
     * @param {string} nombre - Nombre del jefe.
     * @param {string} avatar - Ruta de la imagen del jefe.
     * @param {number} nivelAtaque - Nivel de ataque del jefe.
     * @param {number} vidaEnemigo - Vida mázima del jefe. 
     * @param {number} multiplicadorDanio - Multiplicador de daño del jefe.
     */
    constructor(nombre, avatar, nivelAtaque, vidaEnemigo, multiplicadorDanio = MULTIPLICADOR_DANIO) {
        super(nombre, avatar, "Jefe", nivelAtaque, vidaEnemigo);
        this.multiplicadorDanio = multiplicadorDanio;
        this.esJefe = true;
    }
}