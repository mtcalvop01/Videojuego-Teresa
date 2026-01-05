import { TIPOS_PRODUCTOS } from "./constants.js";

export class Producto {
    constructor(nombre, imagen, precio, rareza, TIPOS_PRODUCTOS, bonus) {
        this.nombre = nombre;
        this.imagen = imagen;
        this.precio = precio;
        this.precioDescuento = precio;
        this.rareza = rareza;
        this.tipo = TIPOS_PRODUCTOS;
        this.bonus = bonus;
    }

    getNombre() {
        return this.nombre;
    }

    setNombre(nombre) {
        this.nombre = nombre;
    }

    getImagen() {
        return this.imagen;
    }

    setImagen(imagen) {
        this.imagen = imagen;
    }

    getPrecio() {
        return this.precio;
    }

    setPrecio(precio) {
        this.precio = precio;
    }

    precioFormateado() {
        return (this.precioDescuento / 100).toFixed(2) + "€";
    }

    descuentoProducto(porcentaje) {
        let descuento = 1 - (porcentaje / 100)
        let nuevoPrecio = this.precio * descuento;
        return new Producto(this.nombre, this.imagen, this.nuevoPrecio, this.rareza, this.tipo, this.bonus)
    }

}