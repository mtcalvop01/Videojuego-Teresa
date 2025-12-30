import { Jugador } from './src/Jugador.js';
import {EnemigosData} from './src/EnemigosData.js';
import { mercadoArray } from './src/Mercado.js';
import { VIDA_BASE, TIPOS_PRODUCTOS, MULTIPLICADOR_DANIO, PUNTOS_BASE_VICTORIA, UMBRAL_VETERANO, DINERO } from './src/constants.js';

const escena1 = document.getElementById("escena1");
const escenaEstadoJugador = document.getElementById("escenaEstadoJugador");
const escena2 = document.getElementById("escena2");
const escena3 = document.getElementById("escena3");
const escena4 = document.getElementById("escena4");
const escena5 = document.getElementById("escena5");
const escena6 = document.getElementById("escena6");

const formulario = document.getElementById("formularioJugador");

const crearJugadorBtn = document.getElementById("crearJugador");

crearJugadorBtn.disabled = true;

const ataqueInput = document.getElementById("ataque");
const defensaInput = document.getElementById("defensa");
const vidaInput = document.getElementById("vida");
const puntosDisponibles = document.getElementById("puntosDisponibles");
const mensaje = document.getElementById("mensajeError");

ataqueInput.addEventListener("input", () => {
    let ataque = Number(ataqueInput.value);
    let defensa = Number(defensaInput.value);
    let vida = Number(vidaInput.value);

    let vidaExtra = vida -100;
    let puntosUsados = ataque + defensa + vidaExtra;
    let puntosRestantes = 10 - puntosUsados;

    if(puntosRestantes < 0){
        puntosRestantes = 0;
    }

    puntosDisponibles.textContent = puntosRestantes;

    if(puntosUsados === 0 || puntosUsados > 10){
        crearJugadorBtn.disabled = true;
        if(puntosUsados > 10){
            mensaje.textContent = "Solo puede repartir 10 puntos."
        }else{
            mensaje.textContent = "";
        }
    }else{
        crearJugadorBtn.disabled = false;
        mensaje.textContent = "";
    }
});

vidaInput.addEventListener("input", () => {
    let ataque = Number(ataqueInput.value);
    let defensa = Number(defensaInput.value);
    let vida = Number(vidaInput.value);

    let vidaExtra = vida -100;
    let puntosUsados = ataque + defensa + vidaExtra;
    let puntosRestantes = 10 - puntosUsados;

    if(puntosRestantes < 0){
        puntosRestantes = 0;
    }

    puntosDisponibles.textContent = puntosRestantes;

    if(puntosUsados === 0 || puntosUsados > 10){
        crearJugadorBtn.disabled = true;
        if(puntosUsados > 10){
            mensaje.textContent = "Solo puede repartir 10 puntos."
        }else{
            mensaje.textContent = "";
        }
    }else{
        crearJugadorBtn.disabled = false;
        mensaje.textContent = "";
    }
});

defensaInput.addEventListener("input", () => {
    let ataque = Number(ataqueInput.value);
    let defensa = Number(defensaInput.value);
    let vida = Number(vidaInput.value);

    let vidaExtra = vida -100;
    let puntosUsados = ataque + defensa + vidaExtra;
    let puntosRestantes = 10 - puntosUsados;

    if(puntosRestantes < 0){
        puntosRestantes = 0;
    }
            puntosDisponibles.textContent = puntosRestantes;


    if(puntosUsados === 0 || puntosUsados > 10){
        crearJugadorBtn.disabled = true;
        if(puntosUsados > 10){
            mensaje.textContent = "Solo puede repartir 10 puntos."
        }else{
            mensaje.textContent = "";
        }
    }else{
        crearJugadorBtn.disabled = false;
        mensaje.textContent = "";
    }
});

document.getElementById("crearJugador").addEventListener("click", () =>{
    event.preventDefault();
    
    let mensajeAviso = document.getElementById("mensaje");

    let nombreInput = document.getElementById("nombre");
    let nombre = nombreInput.value.trim();

    if(nombre === ""){
        mensajeAviso.textContent = "El nombre es obligatorio";
        nombreInput.focus();
        return;
    }

    if(!formulario.checkValidity()){
        return;
    }

    let ataque = Number(document.getElementById("ataque").value);
    let defensa = Number(document.getElementById("defensa").value);
    let vida = Number(document.getElementById("vida").value);

    let vidaExtra = vida - 100;
    let puntosUsados = ataque + defensa + vidaExtra;

    if(ataque < 0 || defensa < 0 || vida < 100 || puntosUsados > 10){
        mensaje.textContent = "Valores no válidos o excede 10 puntos";
        return;
    }

    mensaje.textContent = "";

    const jugador = new Jugador(nombre, ataque, defensa, vida);

    
/*Una vez se ha creado el jugador, para mostrar los datos del formulario hacemos lo siguiente:*/
    let nombreJugador = document.querySelectorAll(".nombreJugador");
    nombreJugador.forEach(nombre => nombre.textContent = jugador.nombre)

    let nomJugador = document.getElementById("nomJugador");
    nomJugador.textContent = "Nombre: " + jugador.nombre;

    let vidaJugador = document.querySelectorAll(".vidaJugador");
    vidaJugador.forEach(vida => vida.textContent = "❤️Vida: " + jugador.vida)

    let ataqueJugador = document.querySelectorAll(".ataqueJugador");
    ataqueJugador.forEach(ataque => ataque.textContent = "⚔️Ataque: " + jugador.ataque)
    
    let defensaJugador = document.querySelectorAll(".defensaJugador");
    defensaJugador.forEach(defensa => defensa.textContent = "🛡️Defensa: " + jugador.defensa)

    escena1.style.display = "none";
    escenaEstadoJugador.style.display = "block";
});

const contenedorTarjetas = document.getElementById("tarjetas");

for(const enemigo of EnemigosData){
    let tarjetasIndividuales = document.createElement("div");
    tarjetasIndividuales.className = "tarj";

    let nombreEnemigo = document.createElement("h3");
    nombreEnemigo.textContent = enemigo.nombre;

    let imagenEnemigos = document.createElement("img");
    imagenEnemigos.src = enemigo.avatar;

    let vidaEnemigo = document.createElement("h3");
    vidaEnemigo.textContent = "❤️Vida: " + enemigo.vidaMaxima;

    let ataqueEnemigo = document.createElement("h3");
    ataqueEnemigo.textContent = "⚔️Ataque: " + enemigo.ataque;

    tarjetasIndividuales.appendChild(nombreEnemigo);
    tarjetasIndividuales.appendChild(imagenEnemigos);
    tarjetasIndividuales.appendChild(vidaEnemigo);
    tarjetasIndividuales.appendChild(ataqueEnemigo);

    contenedorTarjetas.appendChild(tarjetasIndividuales);
}

const contenedorMercado = document.getElementById("tarjeta-Mercado");

for(const mercado of mercadoArray){
    let tarjMercadoIndividual = document.createElement("div");
    tarjMercadoIndividual.className = "tarj";

    let imagenProducto = document.createElement("img");
    imagenProducto.src = mercado.imagen;

    let nombreProducto = document.createElement("h3");
    nombreProducto.textContent = mercado.nombre;

    let precioProducto = document.createElement("h3");
    precioProducto.textContent = "💰Precio: " + mercado.precio;

    let rarezaProducto = document.createElement("h3");
    rarezaProducto.textContent = "🔮Rareza: " + mercado.rareza;

    let botonAvanzarMercado = document.createElement("button");
    botonAvanzarMercado.className = "btnAvanzarMercado";
    botonAvanzarMercado.type = "submit";
    botonAvanzarMercado.textContent = "Comprar";

    tarjMercadoIndividual.appendChild(imagenProducto);
    tarjMercadoIndividual.appendChild(nombreProducto);
    tarjMercadoIndividual.appendChild(precioProducto);
    tarjMercadoIndividual.appendChild(rarezaProducto);
    tarjMercadoIndividual.appendChild(botonAvanzarMercado);

    contenedorMercado.appendChild(tarjMercadoIndividual);
}










const dinero = document.getElementById("monedas");
    dinero.textContent = DINERO;

document.getElementById("estadoJugadorbtn").addEventListener("click", () => {
    escenaEstadoJugador.style.display = "none";
    escena2.style.display = "block";
})

document.getElementById("botonMercado").addEventListener("click", () => {
    escena2.style.display = "none";
    escena3.style.display = "block";
});

document.getElementById("botonResumen").addEventListener("click", () => {
    escena3.style.display = "none";
    escena4.style.display = "block";
});

document.getElementById("botonEnemigos").addEventListener("click", () => {
    escena4.style.display = "none";
    escena5.style.display = "block";
});
