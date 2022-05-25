// Declaración de la función
// Donde describes lo que hace la función, como se llama, y que recibe
function saludar(nombre) {
  return `Hola ${nombre}, saludos`;
}

// Invocación de la función (llamar, usar, ejecutar)
const saludo = saludar("Oscar");
console.log(saludo);
// Solo cambia, el parámetro de la función
const saludo2 = saludar("Nestor");
console.log(saludo2);

// El tipo de hola es funcion y el tipo de saludar('') es el valor de retorno
console.log(typeof saludar("Oscar"));
console.log(typeof saludar);

// funcion guarda referencia de la función hola
const funcion = saludar;
console.log(funcion("José"));
console.log(funcion("Danny"));
