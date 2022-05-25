/*
    Las funciones en JS son first class citizen,
    significa que pueden ser usadas como cualquier otro tipo de dato.
    Esto nos permite guardar funciones en variables y pasarlas como parámetros
*/

// Función flecha guardada en una variable
const funcA = (a) => {
  return a * 10;
};

const funcB = function (letra) {
  console.log("Estamos en Func", letra);
};


// Recuerden que no usamos parentesis para guardar funciones en variables o como parametros
function cualquierFuncion() {
  console.log("Hola mundo!")
}

const funcC = cualquierFuncion; 
/*
    Las Higher-Order Functions, son funciones que
    reciben como parámetro o retornan otra función.
    El ejemplo más común de ellas es en las callbacks.
*/

function on(evento, callback) {
  console.log("en funcion on");
  if (evento === "click") {
    console.log("callback", callback);
    callback();
  } else {
    console.log("Evento desconocido");
  }
}

// Con funcion flecha
on("click", () => {
  console.log("Esta es una funcion flecha");
});

function cheers() {
  console.log("saludando!");
  return "retorno";
}

on("click", cheers);

const enviar = () => {
    console.log('Enviando algo...')
}
on("click", enviar);
