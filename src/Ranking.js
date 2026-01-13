/**
 * Clasifica a un jugador según sus puntos.
 * @param {string} jugador - Instancia del jugador a clasificar.
 * @param {number} umbral - Cantidad de puntos mínima para ser considerado "Veterano".
 * @returns {string} Devuelve "Veterano" si los puntos del jugador son mayores o iguales al umbral, o "Novato" en caso contrario.
 */
export function clasificacionJugador(jugador, umbral = 500){
    if(jugador.puntos >= umbral){
        return "Veterano"
    }else{
        return "Novato"
    }
}