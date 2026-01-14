import { TIPOS_PRODUCTOS } from "./constants.js";
import { Producto } from "./Producto.js";

/**
 * Representa un mercado que contiene productos.
 */
export class Mercado {
    /**
     * Crea una instancia de Mercado.
     * @param {Producto[]} productos - Array de objetos Producto disponibles en el mercado. 
     */
    constructor(productos) {
        this.productos = productos;
    }

    /**
     * Filtra los productos del mercado por rareza.
     * @param {string} rareza - Rareza por la que se desea filtrar ("común", "raro", "legendario").
     * @returns {Producto[]} - Array de productos que coinciden con la rareza indicada.
     */
    filtrarPorRareza(rareza) {
        return this.productos.filter(producto => producto.rareza == rareza);
    }

    /**
     * Aplica un descuento a los productos según un filtro.
     * @param {string} filtro - Nombre de la propiedad del producto a filtrar.
     * @param {*} valor - Valor de la propiedad que debe coincidir para aplicar el descuento.
     * @param {number} porcentaje - Porcentaje de descuento a aplicar.
     */
    aplicarDescuento(filtro, valor, porcentaje) {
        this.productos = this.productos.map(producto => {
            if (producto[filtro] == valor) {
                return producto.aplicarDescuento(porcentaje);
            }
            return producto;
        });
    }

    /**
     * Busca un producto por su nombre.
     * @param {string} nombre - Nombre exacto del productos que se desea buscar.
     * @returns  {Producto | undefined} El primer producto que coincida con el nombre, o undefined si no se enceuntra.
     */
    buscarProductoNombre(nombre) {
        return this.productos.find(producto => producto.nombre == nombre);
    }
}

/**
 * Array con todos los productos disponibles en el mercado.
 * @type {Producto[]}
 */
export const mercadoArray = [
    new Producto("Espada de Hierro", "./img/images/imagenes/espada_hierro.svg", 80, "común", TIPOS_PRODUCTOS.ARMA, { ataque: 5 }),
    new Producto("Armadura de Cuero", "./img/images/imagenes/armadura.svg", 70, "común", TIPOS_PRODUCTOS.ARMADURA, { defensa: 3 }),
    new Producto("Poción de Vida", "./img/images/imagenes/pocion_vida.svg", 50, "común", TIPOS_PRODUCTOS.CONSUMIBLE, { curacion: 40 }),
    new Producto("Cuchillo de la Muerte", "./img/images/imagenes/cuchillo.svg", 150, "raro", TIPOS_PRODUCTOS.ARMA, { ataque: 12 }),
    new Producto("Escudo del Dragón", "./img/images/imagenes/escudo_dragon.svg", 150, "raro", TIPOS_PRODUCTOS.ARMADURA, { defensa: 10 }),
    new Producto("Anillo de Mana", "./img/images/imagenes/anillo.svg", 300, "raro", "accesorio", { mana: 30 }),
    new Producto("Espada Legendaria", "./img/images/imagenes/espada_legendaria.svg", 250, "legendario", TIPOS_PRODUCTOS.ARMA, { ataque: 25 }),
    new Producto("Armadura Sagrada", "./img/images/imagenes/armadura_sagrada.svg", 200, "legendario", TIPOS_PRODUCTOS.ARMADURA, { defensa: 20 }),
    new Producto("Botas del Veloz", "./img/images/imagenes/botas.svg", 300, "legendario", TIPOS_PRODUCTOS.ARMADURA, { velocidad: 5 })
];