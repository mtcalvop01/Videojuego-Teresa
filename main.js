import { Jugador } from './src/Jugador.js';
import { Batalla } from './src/Batalla.js';
import { EnemigosData } from './src/EnemigosData.js';
import { mercadoArray } from './src/Mercado.js';
import { VIDA_BASE, TIPOS_PRODUCTOS, MULTIPLICADOR_DANIO, PUNTOS_BASE_VICTORIA, UMBRAL_VETERANO, DINERO } from './src/constants.js';
import { Enemigo } from './src/Enemigos.js';

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

ataqueInput.addEventListener("input", () => {
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

    if (puntosUsados === 0 || puntosUsados > 10) {
        crearJugadorBtn.disabled = true;
        if (puntosUsados > 10) {
            mensaje.textContent = "Solo puede repartir 10 puntos."
        } else {
            mensaje.textContent = "";
        }
    } else {
        crearJugadorBtn.disabled = false;
        mensaje.textContent = "";
    }
});

vidaInput.addEventListener("input", () => {
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

    if (puntosUsados === 0 || puntosUsados > 10) {
        crearJugadorBtn.disabled = true;
        if (puntosUsados > 10) {
            mensaje.textContent = "Solo puede repartir 10 puntos."
        } else {
            mensaje.textContent = "";
        }
    } else {
        crearJugadorBtn.disabled = false;
        mensaje.textContent = "";
    }
});

defensaInput.addEventListener("input", () => {
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


    if (puntosUsados === 0 || puntosUsados > 10) {
        crearJugadorBtn.disabled = true;
        if (puntosUsados > 10) {
            mensaje.textContent = "Solo puede repartir 10 puntos."
        } else {
            mensaje.textContent = "";
        }
    } else {
        crearJugadorBtn.disabled = false;
        mensaje.textContent = "";
    }
});

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
        mensaje.textContent = "Valores no válidos o excede 10 puntos";
        return;
    }

    mensaje.textContent = "";

    jugador = new Jugador(nombre, ataque, defensa, vida);


    /*Una vez se ha creado el jugador, para mostrar los datos del formulario hacemos lo siguiente:*/
    let nombreJugador = document.querySelectorAll(".nombreJugador");
    nombreJugador.forEach(nombre => nombre.textContent = jugador.nombre)

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
    botonAvanzarMercado.className = "anadirCarro";
    botonAvanzarMercado.type = "submit";
    botonAvanzarMercado.textContent = "Añadir";

    botonAvanzarMercado.addEventListener("click", () => {

        botonAvanzarMercado.style.animation = "salto 0.5s ease";
        setTimeout(() => {
            botonAvanzarMercado.style.animation = "";
        }, 500);

        botonAvanzarMercado.textContent = "🛒";
        setTimeout(() => {
            botonAvanzarMercado.textContent = "Quitar";
        }, 1000);

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
        } else {
            if (jugador.dinero >= mercado.precio) {
                productosSeleccionados.add(mercado);
                jugador.anadirObjeto(mercado);
                jugador.dinero = jugador.dinero - mercado.precio;
                dinero.textContent = jugador.dinero;
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
            } else {
                botonAvanzarMercado.style.display = "block";
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

function finalizarBatallas() {
    // Ocultar la escena de batalla y mostrar la final
    escena5.style.display = "none";
    escena6.style.display = "block";

    let ranking = JSON.parse(localStorage.getItem("ranking")) || [];
    ranking.push({
        nombre: jugador.nombre,
        puntos: jugador.puntos,
        dinero: jugador.dinero,
    });

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
    const nivelJugadorFinal = jugadorMurio ? "Novato" : (jugador.puntos >= 50 ? "Veterano" : "Novato");

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
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1,0.3), y: Math.random()-0.2 } });
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7,0.9), y: Math.random()-0.2 } });
        }, 250);
    }
}


document.getElementById("botonEnemigos").addEventListener("click", () => {
    escena4.style.display = "none";
    escena5.style.display = "block";

    const batalla = document.getElementById("batallas");
    const continuarBtn = document.getElementById("batallasBtn");
    

    function mostrarBatalla(){
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
        imagenJugador.src = "./imagenes/imgGuerrera.svg";
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

            resultadoTexto.textContent = `Ganador: ${jugador.nombre}<br><br> Monedas: ${jugador.dinero}`;

            for (let i = 0; i < 3; i++) {
                const imgAnimacionMonedas = document.createElement("img");
                imgAnimacionMonedas.className = "imgAnimacionMonedas";
                imgAnimacionMonedas.src = "./imagenes/moneda.png";
                imgAnimacionMonedas.alt = "monedas";
                imgAnimacionMonedas.style.left = `${25 + (i * 25)}%`;  // 25%, 50%, 75%
                batalla.appendChild(imgAnimacionMonedas);
            }
        } else {
            resultadoTexto.textContent = `Ganador: ${enemigoActual.nombre}`;
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

    if(jugador){
        jugador.vida = jugador.vidaTotal();
        jugador.dinero = DINERO;
        jugador.puntos = 0;
        jugador.productos = [];
    }
    

    if(dinero){
        dinero.textContent = DINERO;
    }
});