const express = require("express");
const fs = require("fs/promises");

const FILENAME = "koders.json";
const ENCODING = "utf8";

const router = express.Router();

router.get("/", async (req, res) => {
  const koders = await readKoders(); // accedemos solo a los koders que estan en un arreglo

  const edad = Number(req.query.edad);
  const count = Number(req.query.count);

  let respuesta = koders;
  console.log("Respuesta inicial:", respuesta);
  if (!Number.isNaN(edad)) {
    console.log("La edad del parametro es:", edad);
    respuesta = koders.filter((koder) => koder.edad === edad); // todos los Koders, que tengan la edad buscada
    console.log("La nueva respuesta es:", respuesta);
  }

  if (!Number.isNaN(count)) {
    console.log("El parametro count es:", count);
    respuesta = respuesta.slice(0, count);
    console.log("La nueva respuesta es:", respuesta);
  }

  res.json(respuesta);
});

router.post("/", async (req, res) => {
  // Guardamos el Koder en una constante
  console.log("body:", req.body);
  const koder = req.body;

  // Cargar Koders
  const koders = await readKoders(); // accedemos solo a los koders que estan en un arreglo

  // Agregar un nuevo Koder
  koders.push(koder);

  // Guardar cambios
  await writeKoders({ koders });

  // Enviamos respuesta
  res.status(201); // Estado de creado
  res.json(koders);
});

router.patch("/:nombre", async (req, res) => {
  // Guardamos el nombre del Koder a Cambiar
  const nombre = req.params.nombre;

  // Guardamos el Koder en una constante
  console.log("body:", req.body);
  const newKoder = req.body;

  // Cargar Koders
  const koders = await readKoders();

  // TODO: Buscar y actualizar al Koder cuyo koder.nombre sea igual a nombre
  for (let i = 0; i < koders.length; i++) {
    const oldKoder = koders[i];

    if (oldKoder.nombre === nombre) {
      oldKoder.edad = newKoder.edad;
      oldKoder.genero = newKoder.genero;
    }
  }

  // Guardar cambios, envolviendo el arreglo koders en un objeto
  await writeKoders({ koders });

  // Enviamos respuesta
  res.status(200); // Estado de creado
  res.json(koders);
});

router.delete("/:nombre", async (req, res) => {
  // Guardamos el nombre del Koder a Cambiar
  const nombre = req.params.nombre;

  // Cargar Koders
  const koders = await readKoders();

  // Voy a eliminar al Koder que se llame como la constante nombre
  const newKoders = koders.filter((koder) => koder.nombre !== nombre);
  console.log(newKoders);

  const newObject = {
    koders: newKoders,
  };

  // Guardar cambios
  await writeKoders(newObject);

  // Enviamos respuesta
  res.status(200); // Estado de creado
  res.json(newKoders);
});

async function readKoders() {
  const archivo = await fs.readFile(FILENAME, ENCODING); // el archivo es un String
  const objeto = JSON.parse(archivo); // convierte un string a un objeto
  const koders = objeto.koders; // accedemos solo a los koders que estan en un arreglo

  return koders;
}

async function writeKoders(newObject) {
  const nuevoArchivo = JSON.stringify(newObject, null, 2); // Convertimos el objeto a un String nuevo
  await fs.writeFile(FILENAME, nuevoArchivo, ENCODING);
}

module.exports = router;
