import { VIDA_BASE, TIPOS_PRODUCTOS, IMG_JUGADOR, DINERO } from "./constants.js";
/**
 * Representa a un jugador en el juego.
 */
export class Jugador {
    /**
     * Crea un nuevo jugador.
     * 
     * @param {string} nombre - El nombre del jugador.
     * @param {number} ataque - El valor base del ataque del jugador.
     * @param {number} defensa - El valor base de defensa del jugador.
     * @param {number} [vida=VIDA_BASE] - La vida inicial del jugador.
     */
    constructor(nombre, ataque, defensa, vida = VIDA_BASE) {
        this.nombre = nombre;
        this.avatar = IMG_JUGADOR;
        this.ataque = ataque;
        this.defensa = defensa;
        this.vida = vida;
        this.puntos = 0;
        this.inventario = [];
        this.vidaMaxima = VIDA_BASE;
        this.dinero = DINERO
    }

    /**
     * Añade un objeto al inventario del jugador.
     * @param {Object} objeto - Objeto a añadir al inventario. 
     */
    anadirObjeto(objeto) {
        this.inventario.push(objeto)
    }

    /**
     * Sumar puntos al jugador.
     * @param {number} cantidad - Cantidad de puntos a añadir. 
     */
    sumarPuntos(cantidad) {
        this.puntos = this.puntos + cantidad
    }

    /**
     * Calcula el ataque total del jugador, incluyendo bonus de armas.
     * @returns {number} - Ataque total.
     */
    ataqueTotal() {
        let total = 0;
        for (let producto of this.inventario) {
            if (producto.tipo === TIPOS_PRODUCTOS.ARMA && producto.bonus?.ataque) {
                total += producto.bonus.ataque;
            }
        }
        return total + this.ataque;
    }

    /**
     * Calcula la defensa total del jugador, incluyendo bonus de armaduras.
     * @returns {number} - Defensa total.
     */
    defensaTotal() {
        let total = 0;
        for (let producto of this.inventario) {
            if (producto.tipo === TIPOS_PRODUCTOS.ARMADURA && producto.bonus.defensa) {
                total += producto.bonus.defensa;
            }
        }
        return total + this.defensa;
    }

    /**
     * Calcula la vida total del jugador, incluyendo bonus de consumibles.
     * @returns {number} - Vida total.
     */
    vidaTotal() {
        let total = this.vidaMaxima;
        for (let producto of this.inventario) {
            if (producto.tipo === TIPOS_PRODUCTOS.CONSUMIBLE && producto.bonus?.curacion) {
                total += producto.bonus.curacion;
            }
        }
        return total;
    }
}