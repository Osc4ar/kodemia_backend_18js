const express = require("express");
const fs = require("fs/promises");

const server = express();

// middleware para convertir request a JSON
server.use(express.json())

server.get("/", (request, response) => {
  response.send("Hola Koders!");
});

server.get("/koders", async (req, res) => {
  const archivo = await fs.readFile("koders.json", "utf8"); // el archivo es un String
  console.log(archivo);
  const objeto = JSON.parse(archivo); // convierte un string a un objeto
  console.log(objeto);
  const koders = objeto.koders; // accedemos solo a los koders que estan en un arreglo

  res.json(koders)
});

server.post("/koders", async (req, res) => {
  console.log('body:', req.body);
  const koder = req.body;

  // Cargar Koders
  const archivo = await fs.readFile("koders.json", "utf8"); // el archivo es un String
  const objeto = JSON.parse(archivo); // convierte un string a un objeto
  const koders = objeto.koders; // accedemos solo a los koders que estan en un arreglo

  // Agregar un nuevo Koder
  koders.push(koder)
  
  // Guardar cambios
  const nuevoArchivo = JSON.stringify(objeto, null, 2) // Convertimos el objeto a un String nuevo
  await fs.writeFile("koders.json", nuevoArchivo, "utf8");

  // Enviamos respuesta
  res.status(201) // Estado de creado
  res.json(koders)
});

server.get("/koder", (req, res) => {
  const respuesta = {
    mensaje: "Aqui estan todos los koders",
  };

  res.json(respuesta);
})

server.post("/koder", (req, res) => {
  const respuesta = {
    mensaje: "Aqui puedes crear koders",
  };

  res.json(respuesta);
})

server.put("/koder", (req, res) => {
  const respuesta = {
    mensaje: "Aqui puedes sustituir un koder",
  };

  res.json(respuesta);
})

server.listen(8000, () => {
  console.log("Servidor ejecutandose");
});
