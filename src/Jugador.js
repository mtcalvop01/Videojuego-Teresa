export class Jugador{
    constructor(nombre, avatar){
        this.nombre = nombre;
        this.avatar = avatar;
        this.puntos = 0;
        this.inventario = [];
        this.vida = 100;
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
}