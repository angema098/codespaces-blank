/*0Scripts: Logica de JavaScript 
Seccion 1: Logica: Calculadora de Promedio
*/

const btnPromedio = document.getElementById("btnPromedio");
const resultadoPromedio = document.getElementById("resultadoPromedio");

btnPromedio.addEventListener("click", () => {
    const n1 = parseFloat(document.getElementById("nota1").value);
    const n2 = parseFloat(document.getElementById("nota2").value);
    const n3 = parseFloat(document.getElementById("nota3").value);

    //validar que las tres notas sean numeros
    if(isNaN(n1) || isNaN(n2) ||isNaN(n3)){
        resultadoPromedio.textContent = "Debes ingresar las 3 notas";
        return;
    }

    const promedio =(n1 + n2 + n3)/3;
    let mensaje = `Promedio: ${promedio.toFixed(2)} -`;

    //Condicional para clasificar el resultado
    if(promedio >= 4.5)     mensaje += "¡Excelente!";
    else if (promedio >= 3.5)   mensaje += "Buen Trabajo.";
    else if (promedio >= 3.0)   mensaje += "3 es nota el resto plusvalia";
    else                        mensaje += "Perdiste :/";

    resultadoPromedio.textContent = mensaje; 
});

//Seccion 2: DOM - Funciones Demo

const textoDemo = document.getElementById("textoDemo");

function cambiarTexto(){
    textoDemo.textContent = "!El texto Cambio dinamicamente!";
}

function cambiarColor(){
    textoDemo.style.color = "#f72585";
}

function cambiarEstilos(){
    textoDemo.classList.add("destacado");
    textoDemo.style.background = "#4895ef";
    textoDemo.style.color = "white";
}

function resetearDemo(){
    textoDemo.textContent = "Este texto cambiará segun el boton que presiones";
    textoDemo.style.color = "";
    textoDemo.style.background = "#eef2f7";
    textoDemo.classList.remove("destacado");
}
    //Seccion 3: Event Listeners

    //Contador
    let contador = 0;
    const displayContador = document.getElementById("contador");

    document.getElementById("btnMas").addEventListener("click", () => {
    contador++;
    displayContador.textContent = contador;
    });

document.getElementById("btnMenos").addEventListener("click", () => {
    contador--;
    displayContador.textContent = contador;
});

document.getElementById("btnReset").addEventListener("click", () => {
    contador = 0;
    displayContador.textContent = contador;
});

//Entrada de texto en vivo
const inputNombre = document.getElementById("inputNombre");
const salidaNombre = document.getElementById("salidaNombre");

inputNombre.addEventListener("input", (evento) =>{
    const valor = evento.target.value;
    salidaNombre.textContent = valor === ""
    ? "Aqui veras lo que escribas..."
    : `Hola, ${valor}! Tienes ${valor.length} caracteres.`;
});

//lista dinámica 
const inputTarea = document.getElementById("inputTarea");
const btnAgregar = document.getElementById("btnAgregar");
const listaTareas = document.getElementById("listaTareas");

btnAgregar.addEventListener("click", () => {
    const texto = inputTarea.value.trim();

    if(texto === ""){
        alert("Escribe una tarea primero");
        return;
    }

    //Creacion del elemento <li>
    const li = document.createElement("li");
    li.innerHTML = `<span>${texto}</span>`;

    //Creacion del boton eliminar el <li>
    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";

    //Evento para eliminar el <li>
    btnEliminar.addEventListener("click", () => {
        li.remove();
    });

    li.appendChild(btnEliminar);
    listaTareas.appendChild(li);
    inputTarea.value = "";
    inputTarea.focus();
});

//Permitir el ingreso con Enter
inputTarea.addEventListener("keydown", (e) => {
    if(e.key == "Enter") btnAgregar.click();
});

//Seccion : Consola (Espejo visual)
const consolaEspejo = document.getElementById("consolaEspejo");

//Funciones originales
const _log = console.log;
const _warn = console.warn;
const _error = console.error;
const _info = console.info;
const _table = console.table;

function agregarLineaEspejo(tipo, mensaje) {
    //Se limpia el aviso inicial
    if (consolaEspejo.querySelector('.line')?.textContent.includes('apareceran aqui')) {
        consolaEspejo.innerHTML = '';
    }
    const linea = document.createElement("div");
    linea.className = `line ${tipo}`;
    linea.textContent = `[${tipo.toUpperCase()}] ${mensaje}`;
    consolaEspejo.appendChild(linea);
    consolaEspejo.scrollTop = consolaEspejo.scrollHeight;
}

console.log     =(...args) => {_log(...args);        agregarLineaEspejo("log",   args.join(""));};
console.warn    =(...args) => {_log(...args);        agregarLineaEspejo("warn",   args.join(""));};
console.error   =(...args) => {_log(...args);        agregarLineaEspejo("error",   args.join(""));};
console.info    =(...args) => {_log(...args);        agregarLineaEspejo("info",   args.join(""));};
console.table   =(data) => {
    _table(data)
    agregarLineaEspejo("log", "Tabla mostrada en consola real (F12)")
};

//Seccion 5: JavaScript Puro VS JQuery
const cajaDemoJQ = document.getElementById("cajaDemoJQ");

//Con JavaScript
document.getElementById("btnJs").addEventListener("click", () => {
    cajaDemoJQ.textContent = "Modificacion con JavaScript puro.";
    cajaDemoJQ.style.background = "#cfe2ff";
    cajaDemoJQ.style.color = "#084298";
});

//Con JQuery
$("#btnJQ").on("click", function () {
    $("#cajaDemoJQ")
    .text("Modificacion con JQuery")
    .css({
        "background": " #eef2f7",
        "color": "#1e1e2e",
    });
});

//Navegacion suave
document.querySelectorAll('.main-nav a').forEach(enlace => {
    enlace.addEventListener("click", (e) => {
        e.preventDefault();
        const destino = document.querySelector(enlace.getAttribute("href"));
        if (destino) {
            window.scrollTo({
                top:destino.offsetTop - 100,
                behavior: "smooth"
            });
        }
    });
});

//Mensaje de Bienvedia en consola
console.log("Guia de JavaScript cargada correctamente");
console.info("Abre la consola con (F12) para ver los mensajes de los demos.");
