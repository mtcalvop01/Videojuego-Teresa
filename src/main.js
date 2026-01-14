import {Jugador} from './Jugador.js'
import { Batalla } from './Batalla.js';
import { EnemigosData } from './EnemigosData.js';
import { mercadoArray } from './Mercado.js';
import { DINERO } from './constants.js';

const escena1 = document.getElementById("escena1");
const escenaEstadoJugador = document.getElementById("escenaEstadoJugador");
const escena2 = document.getElementById("escena2");
const escena3 = document.getElementById("escena3");
const escena4 = document.getElementById("escena4");
const escena5 = document.getElementById("escena5");
const escena6 = document.getElementById("escena6");
const escena7 = document.getElementById("escena7");

let jugador;

const formulario = document.getElementById("formularioJugador");

const crearJugadorBtn = document.getElementById("crearJugador");

crearJugadorBtn.disabled = true;

const ataqueInput = document.getElementById("ataque");
const defensaInput = document.getElementById("defensa");
const vidaInput = document.getElementById("vida");
const puntosDisponibles = document.getElementById("puntosDisponibles");
const mensaje = document.getElementById("mensajeError");

/**
 * Actualiza los puntos disponibles en el formulario según los valores de ataque, defensa y vida.
 * Deshabilita el botón de crear jugador si los puntos usados son 0 o más de 10.
 * Muestra mensajes de error si se excede el límite de puntos.
 */
function actualizarPuntos() {
    let ataque = Number(ataqueInput.value);
    let defensa = Number(defensaInput.value);
    let vida = Number(vidaInput.value);

    let vidaExtra = vida - 100;
    let puntosUsados = ataque + defensa + vidaExtra;
    let puntosRestantes = 10 - puntosUsados;

    if (puntosRestantes < 0) {
        puntosRestantes = 0;
    }
    puntosDisponibles.textContent = puntosRestantes;

    if (puntosUsados > 10 || ataque < 0 || defensa < 0 || vida < 100) {
        crearJugadorBtn.disabled = true;
            mensaje.textContent = "Solo puede repartir 10 puntos."
        
    } else {
        crearJugadorBtn.disabled = false;
        mensaje.textContent = "";

    }
}
ataqueInput.addEventListener("input", actualizarPuntos);
defensaInput.addEventListener("input", actualizarPuntos);
vidaInput.addEventListener("input", actualizarPuntos);
actualizarPuntos();

document.getElementById("crearJugador").addEventListener("click", (event) => {
    event.preventDefault();

    let mensajeAviso = document.getElementById("mensaje");

    let nombreInput = document.getElementById("nombre");
    let nombre = nombreInput.value.trim();

    if (nombre === "") {
        mensajeAviso.textContent = "El nombre es obligatorio";
        nombreInput.focus();
        return;
    } else {
        mensajeAviso.textContent = "";
    }

    if (!formulario.checkValidity()) {
        return;
    }

    let ataque = Number(document.getElementById("ataque").value);
    let defensa = Number(document.getElementById("defensa").value);
    let vida = Number(document.getElementById("vida").value);

    let vidaExtra = vida - 100;
    let puntosUsados = ataque + defensa + vidaExtra;

    if (ataque < 0 || defensa < 0 || vida < 100 || puntosUsados > 10) {
        mensajeAviso.textContent = "Valores no válidos o excede 10 puntos";
        return;
    }

    mensaje.textContent = "";

    jugador = new Jugador(nombre, ataque, defensa, vida);

    let nombreJugador = document.querySelectorAll(".nombreJugador");
    nombreJugador.forEach(nombre => nombre.textContent = "🧝‍♀️Nombre: " + jugador.nombre)

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

for (const enemigo of EnemigosData) {
    let tarjetasIndividuales = document.createElement("div");
    tarjetasIndividuales.className = "tarj";

    let nombreEnemigo = document.createElement("h3");
    nombreEnemigo.textContent = enemigo.nombre;

    let imagenEnemigos = document.createElement("img");
    imagenEnemigos.src = enemigo.avatar;

    let vidaEnemigo = document.createElement("h3");
    vidaEnemigo.textContent = "❤️Vida: " + enemigo.vida;

    let ataqueEnemigo = document.createElement("h3");
    ataqueEnemigo.textContent = "⚔️Ataque: " + enemigo.nivelAtaque;

    tarjetasIndividuales.appendChild(nombreEnemigo);
    tarjetasIndividuales.appendChild(imagenEnemigos);
    tarjetasIndividuales.appendChild(vidaEnemigo);
    tarjetasIndividuales.appendChild(ataqueEnemigo);

    contenedorTarjetas.appendChild(tarjetasIndividuales);
}

const contenedorMercado = document.getElementById("tarjeta-Mercado");

const productosSeleccionados = new Set();

for (const mercado of mercadoArray) {

    let precioDescuento = mercado.precio;

    if(mercado.rareza === "raro" || mercado.rareza === "legendario"){
        const mercadoDescuento = mercado.descuentoProducto(20);
        precioDescuento = mercadoDescuento.precio;
    }

    let tarjMercadoIndividual = document.createElement("div");
    tarjMercadoIndividual.className = "tarj";

    let imagenProducto = document.createElement("img");
    imagenProducto.src = mercado.imagen;

    let nombreProducto = document.createElement("h3");
    nombreProducto.textContent = mercado.nombre;

    let precioProducto = document.createElement("h3");
    precioProducto.textContent = "💰Precio: " + precioDescuento + "€";

    let rarezaProducto = document.createElement("h3");
    rarezaProducto.textContent = "🔮Rareza: " + mercado.rareza;

    let botonAvanzarMercado = document.createElement("button");
    botonAvanzarMercado.className = "anadirCarro";
    botonAvanzarMercado.type = "submit";
    botonAvanzarMercado.textContent = "Añadir";

    botonAvanzarMercado.addEventListener("click", () => {

        botonAvanzarMercado.style.animation = "salto 0.5s ease";
        setTimeout(() => {
            botonAvanzarMercado.style.animation = "";
        }, 500);

        const cestaMercado = document.getElementById("cestaMercado");
        const divs = cestaMercado.children;
        if (productosSeleccionados.has(mercado)) {
            productosSeleccionados.delete(mercado);
            jugador.dinero = jugador.dinero + mercado.precio;
            dinero.textContent = jugador.dinero;
            tarjMercadoIndividual.classList.remove('tarjetaMercado');
            for (let div of divs) {
                let img = div.querySelector(`img[src='${mercado.imagen}']`)
                if (img) {
                    div.innerHTML = "";
                    break;
                }
            }
            botonAvanzarMercado.textContent = "Añadir";
        } else {
            if (jugador.dinero >= mercado.precio) {
                productosSeleccionados.add(mercado);
                jugador.anadirObjeto(mercado);
                jugador.dinero = jugador.dinero - mercado.precio;
                dinero.textContent = jugador.dinero;
                errorDinero.textContent = "";
                tarjMercadoIndividual.classList.add('tarjetaMercado');
                for (let div of divs) {
                    if (div.querySelector('img') === null) {
                        let img = document.createElement("img");
                        img.src = mercado.imagen;
                        img.alt = mercado.nombre;
                        div.appendChild(img);
                        break;
                    }
                }

                botonAvanzarMercado.textContent = "🛒";
                setTimeout(() => {
                    botonAvanzarMercado.textContent = "Quitar";
                }, 1000);

            } else {
                botonAvanzarMercado.style.display = "block";
                botonAvanzarMercado.style.animation = "none";
                botonAvanzarMercado.style.cursor = "default";
                let errorDinero = document.getElementById("errorDinero");
                errorDinero.textContent = "No puedes comprar más productos";
            }
        }
    });

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

let indiceBatallaActual = 0;

/**
 * Finaliza todas las batallas:
 * -Muestra ranking.
 * -Muestra resutlados.
 * -Activa una animación si es veterano.
 */
function finalizarBatallas() {
    escena5.style.display = "none";
    escena6.style.display = "block";

    let ranking = JSON.parse(localStorage.getItem("ranking")) || [];
    if (ranking.length === 0) {
        ranking = [
            { nombre: "Ana", puntos: 500, dinero: 50 },
            { nombre: "Laura", puntos: 250, dinero: 90 },
            { nombre: "Micaela", puntos: 230, dinero: 0 },
            { nombre: "Isabella", puntos: 200, dinero: 100 },
            { nombre: "Martina", puntos: 410, dinero: 120 },
            { nombre: "Valentina", puntos: 720, dinero: 300 },
            { nombre: "Petra", puntos: 615, dinero: 450 },
            { nombre: "Camila", puntos: 505, dinero: 200 },
            { nombre: "Juana", puntos: 843, dinero: 510 },
            { nombre: "Mariana", puntos: 330, dinero: 75 }
        ];
        localStorage.setItem("ranking", JSON.stringify(ranking));
    }

    jugador = {
        nombre: jugador.nombre,
        puntos: jugador.puntos,
        dinero: jugador.dinero
    }
    ranking.push(jugador);
    ranking.sort((a, b) => b.puntos - a.puntos);
    localStorage.setItem("ranking", JSON.stringify(ranking));

    const tablaBody = document.querySelector("#tabla tbody");
    tablaBody.innerHTML = "";
    ranking.forEach(j => {
        const fila = document.createElement("tr");
        fila.innerHTML = `<td>${j.nombre}</td><td>${j.puntos}</td><td>${j.dinero}</td>`;


        tablaBody.appendChild(fila);
    });

    const contenedorResultado = document.getElementById("texto");
    const jugadorMurio = jugador.vida <= 0;
    const nivelJugadorFinal = jugadorMurio ? "Novato" : (jugador.puntos >= 500 ? "Veterano" : "Novato");

    contenedorResultado.innerHTML = `<p>${jugador.nombre} ha logrado ser un <strong>${nivelJugadorFinal}</strong></p>
                                    <p>Puntos Totales: ${jugador.puntos}</p>`;

    if (nivelJugadorFinal === "Veterano") {
        const duration = 15 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
        function randomInRange(min, max) { return Math.random() * (max - min) + min; }

        const interval = setInterval(() => {
            const timeLeft = animationEnd - Date.now();
            if (timeLeft <= 0) { clearInterval(interval); return; }
            const particleCount = 50 * (timeLeft / duration);
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
        }, 250);
    }
}

document.getElementById("rankingConsola").addEventListener("click", () => {
const ranking = JSON.parse(localStorage.getItem("ranking")) || [];
    console.table(ranking);
});

document.getElementById("botonEnemigos").addEventListener("click", () => {
    escena4.style.display = "none";
    escena5.style.display = "block";

    const batalla = document.getElementById("batallas");
    const continuarBtn = document.getElementById("batallasBtn");

    /**
     * Muestra la batalla actual y gestiona la progresión de las batallas.
     * Si el jugador ha muerto o no hay más enemigos, llama a finalizarBatallas y define la función.
     */
    function mostrarBatalla() {
        if (jugador.vida <= 0 || indiceBatallaActual >= EnemigosData.length) {
            finalizarBatallas();
            continuarBtn.onclick = null;
            return;
        }

        const enemigoActual = EnemigosData[indiceBatallaActual];

        batalla.innerHTML = "";

        const contenedorImg = document.createElement("div");
        contenedorImg.className = "contenedorImgBatallas";

        const imagenJugador = document.createElement("img");
        imagenJugador.src = "./img/images/imagenes/imgGuerrera.svg";
        imagenJugador.alt = jugador.nombre;
        imagenJugador.className = "imgBatallaJugador";

        const imagenEnemigo = document.createElement("img");
        imagenEnemigo.src = enemigoActual.avatar;
        imagenEnemigo.alt = enemigoActual.nombre;
        imagenEnemigo.className = "imgBatallaEnemigo";

        const vs = document.createElement('span');
        vs.textContent = "VS";
        vs.className = "vsTexto";

        contenedorImg.appendChild(imagenJugador);
        contenedorImg.appendChild(vs);
        contenedorImg.appendChild(imagenEnemigo);

        batalla.appendChild(contenedorImg);

        const resultado = new Batalla().batalla(enemigoActual, jugador);
        jugador.vida = Math.max(resultado.vidaJugadorFinal, 0);

        const resultadoTexto = document.createElement("p");
        resultadoTexto.className = "resultadoBatalla";

        if (resultado.vidaJugadorFinal > 0) {
            jugador.dinero = jugador.dinero + resultado.monedas;
            jugador.sumarPuntos(resultado.puntos + resultado.monedas);

            resultadoTexto.innerHTML = `<p>Ganador:<strong> ${jugador.nombre}</strong></p><p>Monedas: <strong>${jugador.dinero}</strong></p>`;

            for (let i = 0; i < 3; i++) {
                const imgAnimacionMonedas = document.createElement("img");
                imgAnimacionMonedas.className = "imgAnimacionMonedas";
                imgAnimacionMonedas.src = "./img/images/imagenes/moneda.png";
                imgAnimacionMonedas.alt = "monedas";
                imgAnimacionMonedas.style.left = `${25 + (i * 25)}%`;
                batalla.appendChild(imgAnimacionMonedas);
            }
        } else {
            resultadoTexto.innerHTML = `Ganador:<strong> ${enemigoActual.nombre}</strong>`;
            jugador.vida = 0;
        }
        batalla.appendChild(resultadoTexto);

        indiceBatallaActual++;
    }

    mostrarBatalla();
    continuarBtn.onclick = mostrarBatalla;
});

document.getElementById("resultadoBtn").addEventListener("click", () => {
    escena6.style.display = "none";
    escena7.style.display = "block";
});

document.getElementById("vistaPrincipal").addEventListener("click", () => {
    escena7.style.display = "none";
    escena1.style.display = "block";

    formulario.reset();

    document.querySelectorAll("#cestaMercado div img").forEach(img => img.remove());

    document.querySelectorAll(".tarjetaMercado").forEach(tarjeta => tarjeta.classList.remove("tarjetaMercado"));

    productosSeleccionados.clear();

    EnemigosData.forEach(e => e.reset());

    indiceBatallaActual = 0;

    if (jugador instanceof Jugador) {
        jugador.vida = jugador.vidaTotal();
        jugador.dinero = DINERO;
        jugador.puntos = 0;
        jugador.inventario = [];
    }

    if (dinero) {
        dinero.textContent = DINERO;
    }
});