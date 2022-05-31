const express = require("express");

const server = express();

server.get("/", (request, response) => {
  response.send("Hola Koders!");
});

server.listen(8000, () => {
  console.log("Servidor ejecutandose");
});
