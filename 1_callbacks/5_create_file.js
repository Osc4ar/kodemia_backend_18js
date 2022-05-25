const fs = require("fs");

function crearArchivo(nombre, contenido) {
  fs.writeFile(nombre, contenido, (err) => {
    if (err) {
      console.error("Algo salio mal:", err);
    } else {
      console.log("Se creo el archivo! :)");
    }
  });
}

// Usando readFile
function leerArchivo(nombre) {
  // Tienen que hacer un console log del contenido del archivo
  console.log('Contenido:', contenido);  // Cotenido: Nuevo Archivo
}

// Usando unlink
function borrarArchivo(nombre) {
  // Tienen que hacer un console log diciendo que se borro el archivo
  // o diciendo que no encontraron el archivo 

  console.error('No se encontró archivo') // Si no se encuentra o falla
  console.log('Archivo', nombre, 'eliminado');  // Archivo hola.txt eliminado 
}

crearArchivo("hola.txt", "Nuevo archivo");
