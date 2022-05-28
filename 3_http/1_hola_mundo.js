const http = require("http");

// Creamos un servidor usando createServer
const server = http.createServer((request, response) => {
  // Vamos a responder al cliente
  response.write("Hola desde mi server!"); // escribimos la respuesta
  response.end(); // terminamos la respuesta y la enviamos
});

// Ponemos al servidor a escuchar en un puerto
server.listen(8000, () => {
  console.log("Servidor iniciado en el puerto 8000");
});
