/*
  Vamos a recibir un arreglo y un callback
  Vamos a ejecutar el callback a cada elemento del arreglo
  y el resultado lo vamos a guardar en otro arreglo
*/
function filter(array, callback) {
  const resultados = [];

  for (let i = 0; i < array.length; i++) {
    // Prestar atencion al uso de callback
    // el resultado de una condicion, es un booleano
    const resultado = callback(array[i]);

    if (resultado) {
      // en filter hacemos push del elemento que cumpla
      // la condicion del callback
      resultados.push(array[i])
    } 
  }

  // Piensen que deben de retornar
  return resultados;
}


// Pruebas
const arreglo = [2, 10, 20, 30, 13, 15, 43]

const esPar = (x) => {
  return x % 2 === 0
}
const esImpar = x => x % 2 === 1
const esImparV2 = x => x % 2 !== 0


const numerosPares = filter(arreglo, esPar)
console.log('Pares', numerosPares)


const numerosImpares = filter(arreglo, esImpar)
console.log('Impares', numerosImpares)




