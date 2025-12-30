import { Enemigo } from "./Enemigos.js";
import { Jefe } from "./Jefe.js";
export const EnemigosData = [
    new Enemigo("Goblin", "./Imagenes/goblin.svg", "Enemigo", 15, 50),
    new Enemigo("Orco", "./Imagenes/orco.svg", "Enemigo", 25, 80),
    new Enemigo("Troll", "./Imagenes/troll.svg", "Enemigo", 35, 120),
    new Jefe("Dragón", "./Imagenes/dragon.svg", 30, 200, "Llama infernal", 2),
    new Enemigo("Esqueleto", "./Imagenes/esqueleto.svg", "Enemigo", 20, 60),
    new Enemigo("Hombre de Hierro", "./Imagenes/hierro.svg", "Enemigo", 28, 90)
];

