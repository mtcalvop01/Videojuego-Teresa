import { PUNTOS_BASE_VICTORIA } from "./constants.js";

/**
 * Clase que gestiona las batallas entre un jugador y un enemigo.
 */
export class Batalla {

    /**
     * Simula una batalla entre un enemigo y un jugador.
     * La batalla se desarrolla en turnos hasta que uno de los dos pierde toda la vida
     * @param {Object} enemigo - Objeto enemigo, instancia de Enemigo o Jefe.
     * @param {Object} jugador - Objeto jugador, instancia de Jugador.
     * @returns {Object} Resultado de la batalla con información sobre ganador y estadísticas.
     * @returns {string} return.ganador - Nombre del ganador.
     * @returns {number} reuturn.puntos - Puntos obtenidos por el jugador si gana.
     * @returns {number} return.monedas - Monedas obtenidas por el jugador si gana.
     * @returns {number} return.vidaJugadorFinal - Vida final del jugador tras la batalla.
     * @returns {number} return.vidaEnemigoFinal - Vida final del enemigo tras la batalla.
     */

    batalla(enemigo, jugador) {
        let vidaTotal = jugador.vidaTotal();
        let ataqueTotal = jugador.ataqueTotal();
        let defensaTotal = jugador.defensaTotal();

        let auxVidaJugador = vidaTotal;
        let auxDefensaJugador = defensaTotal;
        let auxAtaqueJugador = ataqueTotal;
        let auxVidaEnemigo = enemigo.vida;

        while (auxVidaJugador > 0 && auxVidaEnemigo > 0) {

            auxVidaEnemigo = auxVidaEnemigo - auxAtaqueJugador;
            if (auxVidaEnemigo <= 0) break;


            auxVidaJugador = (auxVidaJugador + auxDefensaJugador) - enemigo.nivelAtaque;
            if (auxVidaJugador <= 0) break;
        }
        let ganador;
        let puntos = 0;
        let esJefe = typeof enemigo.multiplicadordanio === "number";
        let monedas = 0;

        if (auxVidaJugador > 0) {
            ganador = jugador.nombre;
            puntos = this.calcularPuntos(enemigo);
            monedas = enemigo.esJefe ? 10:5;
        } else {
            ganador = enemigo.nombre;
        }
        return { ganador, puntos, monedas, vidaJugadorFinal: auxVidaJugador, vidaEnemigoFinal: auxVidaEnemigo };
    }


    /**
     * Calcula los puntos que obtiene el jugador tras vencer al enemigo.
     * Si el enemigo es un jefe, los puntos se multiplican por su multiplicador de daño.
     * @param {Object} enemigo - Enemigo o jefe al que se enfrenta el jugador.
     * @returns {number} Puntos obtenidos tras la victoria.
     */
    calcularPuntos(enemigo) {
        let puntos = PUNTOS_BASE_VICTORIA + enemigo.nivelAtaque;
        let esJefe = typeof enemigo.multiplicadordanio === "number";
        if (esJefe) {
            puntos *= enemigo.multiplicadordanio;

        }
        return Math.round(puntos);
    }

}