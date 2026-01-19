const nombreProducto = document.getElementById("nombreProducto");
const precioProducto = document.getElementById("precioProducto");
const rarezas = document.getElementById("rarezas");
const tipo = document.getElementById("tipo");
const bonusProducto = document.getElementById("bonusProducto");
const imagenProducto = document.getElementById("imagenProducto");


const regexNombre = /^[A-Z][a-z ]{3,}$/
const errorNombre = document.getElementById("errorNombre");
nombreProducto.addEventListener('blur', () => {
    if(!regexNombre.test(nombreProducto.value)){
        errorNombre.textContext = "Debe tener mínimo 3 caracteres, el nombre solo podrá contener caracteres, debe empezar por mayuscula y el resto minuscula y el nombre puede ser compuesto";
    }
    else{
        errorNombre.textContext = '';
    }
});

const regexPrecio = /^(?<=\d*)[1-9]\d*$/
const errorPrecio = document.getElementById("errorPrecio");
precioProducto.addEventListener('blur', () => {
    if(!regexPrecio.test(precioProducto.value)){
        errorPrecio.textContent = "Solo se permiten numeros enteros positivos menores de 99";
    }
    else{
        errorPrecio.textContent = '';
    }
});

const regexBonus = /^\+\d{1,3}$/
const errorBonus = document.getElementById("errorBonus");
bonusProducto.addEventListener('blur', () => {
    if(!regexBonus.test(bonusProducto.value)){
        errorBonus.textContent = "Tiene que comenzar por el carácter + seguido de uno a tres caracteres numéricos: +12, +9, +32, +100… ";
    }
    else{
        errorBonus.textContent = '';
    }
})
 
 const btnAñadir = document.getElementById("btnAñadir");
 btnAñadir.addEventListener("click", (e) => {
    e.preventDefault();

    nombreProducto.dispatchEvent(new Event('blur'));
    precioProducto.dispatchEvent(new Event('blur'));
    bonusProducto.dispatchEvent(new Event('blur'));

    if(
        errorNombre.textContent ||
        errorBonus.textContent ||
        errorPrecio.textContent
    ){
        alert('Todos los campos son obligatorios');
        return;
    }
    let productosTeresa = JSON.parse(localStorage.getItem("productosTeresa")) || [];
    localStorage.setItem("productosTeresa", JSON.stringify(productosTeresa));

    const productos = {
        nombre: nombreProducto.value,
        precio: precioProducto.value,
        rareza: rarezas.value,
        tipo: tipo.value,
        bonus: bonusProducto.value,
        imagen: imagenProducto.value
    }

    productosTeresa.push(productos);
    localStorage.setItem("productosTeresa", JSON.stringify(productosTeresa));
    alert('Producto añadido correctamente');

    nombreProducto.value = '';
    precioProducto.value = '';
    rarezas.value = '';
    tipo.value = '';
    bonusProducto.value = '';
    imagenProducto.value = '';

 });

 
