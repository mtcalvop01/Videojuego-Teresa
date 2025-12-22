export class Enemigo{
    constructor(nombre, avatar){
        this.nombre = nombre;
        this.avatar = avatar;
        this.nivelAtaque = 5;
        this.puntos = 100;
    }

    getNombre(){
        return this.nombre;
    }

    setNombre(nombre){
        this.nombre = nombre;
    }

    getAvatar(){
        return this.avatar;
    }

    setAvatar(avatar){
        this.avatar = avatar;
    }

    getNivelAtaque(){
        return this.nivelAtaque;
    }

    setNivelAtaque(nivelAtaque){
        this.nivelAtaque = nivelAtaque;
    }

    getPuntos(){
        return this.puntos;
    }

    setPuntos(puntos){
        this.puntos = puntos;
    }
}