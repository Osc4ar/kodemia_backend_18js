// Haz una función que reciba un arreglo de números y retorne el número más grande en el arreglo. Ejemplo: [1, 4, 3, 5, 2] -> 5
// Nota: No usar: Math.max ni array.prototype.sort
function getMaxWithFor(array) {
  let maxNum = array[0];

  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
    if (array[i] > maxNum) {
      console.log(`El elemento ${array[i]} es mas grande que ${maxNum}`);
      maxNum = array[i];
    }
  }

  return maxNum;
}

function getMaxWithReduce(array) {
  let maxNum = array.reduce((maxNum, current) => {
    if (current > maxNum) return current; // current ahora sera maxNum
    return maxNum; // maxNum se queda como el numero mayor
  }, array[0]);

  return maxNum;
}

function getMaxWithReduce1Line(array) {
  let maxNum = array.reduce(
    (maxNum, current) => (current > maxNum ? current : maxNum),
    array[0]
  );

  return maxNum;
}

console.log("El numero mas grande es: ", getMaxWithFor([2, 3, 4, 10]));
console.log("El numero mas grande es: ", getMaxWithReduce([40, 2, 34, 12]));
// Haz una función que revierta un String. Ejemplo: ‘hola’ -> ‘aloh’
// Nota: No usar String.reverse
//
// Haz una función que divida dos números a y b. Si b = 0 regresa un mensaje de error.

/*
    hola
    *
    aloh

    hola
    0123


    length = 4
*/


function reverseString(string) {
    let reversed = '';

    for (let i = string.length - 1; i >= 0; i--) {
        reversed += string[i]
        console.log('reversed: ', reversed)
    }

    return reversed;
}

console.log('resultado:', reverseString('revertir'))