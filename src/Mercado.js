import { Producto } from "./Producto.js";
export class Mercado{
    constructor(productos){
        this.productos = productos;
    }

    filtrarPorRareza(rareza){
        return this.productos.filter(producto => producto.rareza == rareza);
    }

    aplicarDescuento(filtro, valor, porcentaje){
        this.productos = this.productos.map(producto => {
            if(producto[filtro] == valor){
                return producto.aplicarDescuento(porcentaje);
            }
            return producto;
        });
    }

    buscarProductoNombre(nombre){
        return this.productos.find(producto => producto.nombre == nombre);
    }
}

export const mercadoArray = [
    new Producto("Espada de Hierro", "./Imagenes/espada_hierro.svg", 100, "común", "arma", { ataque: 5 }),
    new Producto("Armadura de Cuero", "./Imagenes/armadura.svg", 100, "común", "armadura", { defensa: 3 }),
    new Producto("Poción de Vida", "./Imagenes/pocion_vida.svg", 50, "común", "consumible", { curacion: 20 }),
    new Producto("Cuchillo de la Muerte", "./Imagenes/cuchillo.svg", 150, "raro", "arma", { ataque: 12 }),
    new Producto("Escudo del Dragón", "./Imagenes/escudo_dragon.svg", 250, "raro", "armadura", { defensa: 10 }),
    new Producto("Espada Legendaria", "./Imagenes/espada_legendaria.svg", 250, "legendario", "arma", { ataque: 25 }),
    new Producto("Armadura Sagrada", "./Imagenes/armadura_sagrada.svg", 300, "legendario", "armadura", { defensa: 20 }),
    new Producto("Anillo de Mana", "./Imagenes/anillo.svg", 400, "raro", "accesorio", { mana: 30 }),      
    new Producto("Botas del Veloz", "./Imagenes/botas.svg", 400, "común", "armadura", { velocidad: 5 })
];