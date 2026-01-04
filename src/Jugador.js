import { VIDA_BASE, TIPOS_PRODUCTOS, IMG_JUGADOR, DINERO } from "./constants.js";
export class Jugador{
    constructor(nombre, ataque, defensa, vida = VIDA_BASE){
        this.nombre = nombre;
        this.avatar = IMG_JUGADOR;
        this.ataque = ataque;
        this.defensa = defensa;
        this.vida = vida;
        this.puntos = 0;
        this.inventario = [];
        this.vidaMaxima = VIDA_BASE;
        this.dinero = DINERO
    }

    getNombre(){
        return this.nombre;
    }

    setNombre(nombre){
        this.nombre=nombre;
    }

    getAvatar(){
        return this.avatar;
    }

    setAvatar(avatar){
        this.avatar=avatar;
    }

    getPuntos(){
        return this.puntos;
    }

    setPuntos(puntos){
        this.puntos=puntos;
    }

    getInventario(){
        return this.inventario;
    }
    
    setInventario(inventario){
        this.inventario=inventario;
    }

    getVidaMax(){
        return this.vida;
    }

    setVidaMax(vida){
        this.vida=vida;
    }

    anadirObjeto(objeto){
        this.inventario.push(objeto)
    }

    sumarPuntos(cantidad){
        this.puntos = this.puntos + cantidad
    }

    ataqueTotal(){
        let total = 0;
        for(producto of this.inventario){
            if(producto.tipo === TIPOS_PRODUCTOS.ARMA){
                total += producto.bonus;
            }
        }
        return total;
    }

    defensaTotal(){
        let total = 0;
        for(producto of this.inventario){
            if(producto.tipo === TIPOS_PRODUCTOS.ARMADURA){
                total += producto.bonus;
            }
        }
        return total;
    }

    vidaTotal(){
        let total = this.vidaMaxima;
        for(producto of this.inventario){
            if(producto.tipo === TIPOS_PRODUCTOS.CONSUMIBLE){
                total += producto.bonus;
            }
        }
        return total;
    }
}