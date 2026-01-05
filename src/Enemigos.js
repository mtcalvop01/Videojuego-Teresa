export class Enemigo {
    constructor(nombre, avatar, tipo = "Enemigo", nivelAtaque, vidaEnemigo) {
        this.nombre = nombre;
        this.avatar = avatar;
        this.tipo = tipo;
        this.nivelAtaque = nivelAtaque;
        this.puntos = 100;
        this.vida = vidaEnemigo;
    }

    getNombre() {
        return this.nombre;
    }

    setNombre(nombre) {
        this.nombre = nombre;
    }

    getAvatar() {
        return this.avatar;
    }

    setAvatar(avatar) {
        this.avatar = avatar;
    }

    getNivelAtaque() {
        return this.nivelAtaque;
    }

    setNivelAtaque(nivelAtaque) {
        this.nivelAtaque = nivelAtaque;
    }

    getPuntos() {
        return this.puntos;
    }

    setPuntos(puntos) {
        this.puntos = puntos;
    }
}