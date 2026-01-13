import { Enemigo } from "./Enemigos.js";
import { Jefe } from "./Jefe.js";

/**
 * Array que contiene todos los enemigos y jefes disponibles en el juego.
 * @type {Array.<Enemigo|Jefe>}
 */
export const EnemigosData = [
    new Enemigo("Goblin", "./Imagenes/goblin.svg", "Enemigo", 30, 35),
    new Enemigo("Orco", "./Imagenes/orco.svg", "Enemigo", 35, 30),
    new Enemigo("Troll", "./Imagenes/troll.svg", "Enemigo", 32, 60),
    new Jefe("Dragón", "./Imagenes/dragon.svg", 45, 90, 2),
    new Enemigo("Esqueleto", "./Imagenes/esqueleto.svg", "Enemigo", 28, 40),
    new Enemigo("Hombre de Hierro", "./Imagenes/hierro.svg", "Enemigo", 38, 70)
];

