import { TIPOS_PRODUCTOS } from "./constants.js";

/**
 * Representa un producto que puede ser adquirido por el jugador en el juego.
 */
export class Producto {
    /**
     * Crea un nuevo producto.
     * @param {string} nombre - Nombre del producto.
     * @param {string} imagen - Ruta de la imagen del producto.
     * @param {number} precio - Precio base del producto en monedas.
     * @param {string} rareza - Rareza del producto ("común", "raro", "lengendario")
     * @param {string} TIPOS_PRODUCTOS - Tipo del producto (arma, armadura, consumible)
     * @param {Object} bonus - Bonus que aporta el producto al jugador.
     */
    constructor(nombre, imagen, precio, rareza, TIPOS_PRODUCTOS, bonus) {
        this.nombre = nombre;
        this.imagen = imagen;
        this.precio = precio;
        this.precioDescuento = precio;
        this.rareza = rareza;
        this.tipo = TIPOS_PRODUCTOS;
        this.bonus = bonus;
    }

    /**
     * Devuelve el precio actual del producto formateado en euros.
     * @returns {string} Precio formateado en euros.
     */
    precioFormateado() {
        return (this.precioDescuento / 100).toFixed(2) + "€";
    }

    /**
     * Crea un nuevo producto con descuento aplicado.
     * @param {number} porcentaje - Porcentaje de descuento a aplicar.
     * @returns {Producto} Nuevo objeto Producto con el precio con descuento.
     */
    descuentoProducto(porcentaje) {
        let descuento = 1 - (porcentaje / 100)
        let nuevoPrecio = this.precio * descuento;
        return new Producto(this.nombre, this.imagen, nuevoPrecio, this.rareza, this.tipo, this.bonus)
    }

}