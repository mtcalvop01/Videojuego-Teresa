import { PUNTOS_BASE_VICTORIA } from "./constants.js";
export class Batalla {

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

        if (auxVidaJugador > 0) {
            ganador = jugador.nombre;
            puntos = this.calcularPuntos(enemigo);
        } else {
            ganador = enemigo.nombre;
        }
        return { ganador, puntos, vidaJugadorFinal: auxVidaJugador, vidaEnemigoFinal: auxVidaEnemigo };
    }


    calcularPuntos(enemigo) {
        let puntos = PUNTOS_BASE_VICTORIA + enemigo.nivelAtaque;
        const esJefe = typeof enemigo.multiplicadordanio === "number";
        if (esJefe) {
            puntos *= enemigo.multiplicadordanio;
        }
        return Math.round(puntos);
    }

}