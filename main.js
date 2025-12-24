import { Jugador } from './src/Jugador.js';
import { VIDA_BASE, TIPOS_PRODUCTOS, MULTIPLICADOR_DANIO, PUNTOS_BASE_VICTORIA, UMBRAL_VETERANO, DINERO } from './src/constants.js';

const escena1 = document.getElementById("escena1");
const escena2 = document.getElementById("escena2");
const escena3 = document.getElementById("escena3");
const escena4 = document.getElementById("escena4");
const escena5 = document.getElementById("escena5");
const escena6 = document.getElementById("escena6");

const formulario = document.getElementById("formularioJugador");

document.getElementById("crearJugador").addEventListener("click", () =>{
    event.preventDefault();
    if(!formulario.checkValidity()){
        return;
    }

    const nombre = document.getElementById("nombre").value;
    const ataque = document.getElementById("ataque").value;
    const defensa = document.getElementById("defensa").value;
    const vida = document.getElementById("vida").value;

    const jugador = new Jugador(nombre, ataque, defensa, vida);
    console.log(jugador)

/*Una vez se ha creado el jugador, para mostrar los datos del formulario hacemos lo siguiente:*/
    let nombreJugador = document.querySelectorAll(".nombreJugador");
    nombreJugador.forEach(nombre => nombre.textContent = jugador.nombre)

    let vidaJugador = document.getElementById("vidaJugador");
    vidaJugador.textContent = "Vida: " + jugador.vida;

    let ataqueJugador = document.getElementById("ataqueJugador");
    ataqueJugador.textContent = "Ataque: " + jugador.ataque;
    
    let defensaJugador = document.getElementById("defensaJugador");
    defensaJugador.textContent = "Defensa: " + jugador.defensa;

    escena1.style.display = "none";
    escena2.style.display = "block";
});

const dinero = document.getElementById("monedas");
    dinero.textContent = DINERO;

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
    escena5.style.dinero = "block";
})




