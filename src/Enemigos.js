/**
 * Representa a un enemigo en el juego.
 */
export class Enemigo {
    /**
     * Creación del enemigo.
     * @param {string} nombre - Nombre del enemigo.
     * @param {string} avatar - Ruta de la imagen del enemigo.
     * @param {string} tipo - Indica el tipo del enemigo.
     * @param {number} nivelAtaque - Nivel de ataque del enemigo.
     * @param {number} vidaEnemigo - Vida máxima del enemigo.
     */
    constructor(nombre, avatar, tipo = "Enemigo", nivelAtaque, vidaEnemigo) {
        this.nombre = nombre;
        this.avatar = avatar;
        this.tipo = tipo;
        this.nivelAtaque = nivelAtaque;
        this.vida = vidaEnemigo;
        this.vidaInicial = vidaEnemigo;
        this.esJefe = false;
    }

    /**
     * Resetea la vida del enemigo a su valor inicial.
     */
    reset(){
        this.vida = this.vidaInicial;
    }
}