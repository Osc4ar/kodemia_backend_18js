import { unlink, readFile, writeFile } from "fs/promises";

// Usando writeFile
async function crearArchivo(nombre, contenido) {}

// Usando readFile
async function leerArchivo(nombre) {
  // Tienen que hacer un console log del contenido del archivo
  console.log("Contenido:", contenido); // Cotenido: Nuevo Archivo
}

// Usando unlink
// Tienen que hacer un console log diciendo que se borro el archivo
// o diciendo que no encontraron el archivo
async function borrarArchivo(nombre) {
  try {
    await unlink(nombre);
    console.log(`El archivo ${nombre} fue eliminado`); // Archivo hola.txt eliminado
  } catch (err) {
    console.error("No se encontró el archivo"); // Si no se encuentra o falla
    console.error(err);
  }
}

async function test() {
  //   await crearArchivo("prueba.txt", "Hola Koders!");
  //   await leerArchivo("prueba.txt");
  await borrarArchivo("prueba.txt");
}
test();
