export class Enemigo{
    constructor(nombre, avatar, tipo = "Enemigo", nivelAtaque, VIDA_BASE){
        this.nombre = nombre;
        this.avatar = avatar;
        this.tipo = tipo;
        this.ataque = nivelAtaque;
        this.puntos = 100;
        this.vida = vida;
        this.vidaMaxima = VIDA_BASE;
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