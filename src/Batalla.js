import { PUNTOS_BASE_VICTORIA } from "./constants.js";
export class Batalla{

    batalla(enemigo, jugador){
        let vidaTotal = jugador.vidaTotal();
        let ataqueTotal = jugador.ataqueTotal();
        let defensaTotal = jugador.defensaTotal();

        let auxVidaJugador = vidaTotal;
        let auxDefensaJugador = defensaTotal;
        let auxAtaqueJugador = ataqueTotal;
        let auxVidaEnemigo = enemigo.puntos;

        while(auxVidaJugador > 0 && auxVidaEnemigo > 0){
            auxVidaJugador = (auxVidaJugador + auxDefensaJugador) - enemigo.nivelAtaque;
            auxVidaEnemigo = auxVidaEnemigo - auxAtaqueJugador;
        }
        let jugadorVivo = auxVidaJugador > 0
        let enemigoVivo = auxVidaEnemigo > 0

        if(jugadorVivo && !enemigoVivo){
            return {ganador: jugador.nombre, puntos: this.calcularPuntos(enemigo) }
        }

        if(!jugadorVivo && enemigoVivo){
            return {ganador: enemigo.nombre, puntos: 0}
        }
    }


calcularPuntos(enemigo){
    let puntos = PUNTOS_BASE_VICTORIA + enemigo.nivelAtaque;
    const esJefe = typeof enemigo.multiplicadordanio === "number";
    if(esJefe){
        puntos *= enemigo.multiplicadordanio; 
    }
    return Math.round(puntos);
}

}