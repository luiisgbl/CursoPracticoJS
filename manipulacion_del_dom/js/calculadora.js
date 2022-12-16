const primerDato = document.querySelector("#dato1");
const segundoDato = document.querySelector("#dato2");
const calcular = document.querySelector("#concatenar");
const sumar = document.querySelector("#sumar");
const resultado = document.querySelector("#resultado");
let sumaInput;

primerDato.value = "1";
segundoDato.value = "2";


function concatena() {
    sumaInput = primerDato.value + segundoDato.value;
    resultado.innerHTML = "Concatenacion: " + sumaInput
}

function suma() {
sumaInput = parseInt(primerDato.value) + parseInt(segundoDato.value);
resultado.innerText = "Suma: " + sumaInput;
}

function datos (){
}