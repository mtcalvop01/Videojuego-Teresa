import { TIPOS_PRODUCTOS } from "./constants.js";
import { Producto } from "./Producto.js";
export class Mercado {
    constructor(productos) {
        this.productos = productos;
    }

    filtrarPorRareza(rareza) {
        return this.productos.filter(producto => producto.rareza == rareza);
    }

    aplicarDescuento(filtro, valor, porcentaje) {
        this.productos = this.productos.map(producto => {
            if (producto[filtro] == valor) {
                return producto.aplicarDescuento(porcentaje);
            }
            return producto;
        });
    }

    buscarProductoNombre(nombre) {
        return this.productos.find(producto => producto.nombre == nombre);
    }
}

export const mercadoArray = [
    new Producto("Espada de Hierro", "./Imagenes/espada_hierro.svg", 80, "común", TIPOS_PRODUCTOS.ARMA, { ataque: 5 }),
    new Producto("Armadura de Cuero", "./Imagenes/armadura.svg", 70, "común", TIPOS_PRODUCTOS.ARMADURA, { defensa: 3 }),
    new Producto("Poción de Vida", "./Imagenes/pocion_vida.svg", 50, "común", TIPOS_PRODUCTOS.CONSUMIBLE, { curacion: 40 }),
    new Producto("Cuchillo de la Muerte", "./Imagenes/cuchillo.svg", 150, "raro", TIPOS_PRODUCTOS.ARMA, { ataque: 12 }),
    new Producto("Escudo del Dragón", "./Imagenes/escudo_dragon.svg", 150, "raro", TIPOS_PRODUCTOS.ARMADURA, { defensa: 10 }),
    new Producto("Anillo de Mana", "./Imagenes/anillo.svg", 300, "raro", "accesorio", { mana: 30 }),
    new Producto("Espada Legendaria", "./Imagenes/espada_legendaria.svg", 250, "legendario", TIPOS_PRODUCTOS.ARMA, { ataque: 25 }),
    new Producto("Armadura Sagrada", "./Imagenes/armadura_sagrada.svg", 200, "legendario", TIPOS_PRODUCTOS.ARMADURA, { defensa: 20 }),
    new Producto("Botas del Veloz", "./Imagenes/botas.svg", 300, "legendario", TIPOS_PRODUCTOS.ARMADURA, { velocidad: 5 })
];