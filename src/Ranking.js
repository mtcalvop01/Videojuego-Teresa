export function clasificacionJugador(jugador, umbral = 500){
    if(jugador.puntos >= umbral){
        return "Veterano"
    }else{
        return "Novato"
    }
}