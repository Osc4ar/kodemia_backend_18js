const express = require("express");

const server = express();

server.get("/", (request, response) => {
  response.send("Hola Koders!");
});

server.post("/users", (req, res) => {
  const respuesta = {
    mensaje: "Aqui puedes crear usuarios",
  };

  // Va a convertir el objeto a JSON
  // lo va a mandar como respuesta
  // y va a crear el header Content-Type
  res.json(respuesta);
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
