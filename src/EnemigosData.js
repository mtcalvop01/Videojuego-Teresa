import { Enemigo } from "./Enemigos.js";
import { Jefe } from "./Jefe.js";

/**
 * Array que contiene todos los enemigos y jefes disponibles en el juego.
 * @type {Array.<Enemigo|Jefe>}
 */
export const EnemigosData = [
    new Enemigo("Goblin", "./img/images/imagenes/goblin.svg", "Enemigo", 30, 35),
    new Enemigo("Orco", "./img/images/imagenes/orco.svg", "Enemigo", 35, 30),
    new Enemigo("Troll", "./img/images/imagenes/troll.svg", "Enemigo", 32, 60),
    new Jefe("Dragón", "./img/images/imagenes/dragon.svg", 45, 90, 2),
    new Enemigo("Esqueleto", "./img/images/imagenes/esqueleto.svg", "Enemigo", 28, 40),
    new Enemigo("Hombre de Hierro", "./img/images/imagenes/hierro.svg", "Enemigo", 38, 70)
];

