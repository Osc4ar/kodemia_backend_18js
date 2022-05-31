const http = require("http");

// Creamos un servidor usando createServer
const server = http.createServer((request, response) => {
  console.log("URL:", request.url); // meterla en una constate
  console.log("Método:", request.method); // meterlo en una constate

  // Si la URL es /koder, mensaje
  console.log("Aqui hay un solo Koder");

  // Si la URL es /koders, mensaje
  console.log("Aqui hay todos los Koders");

  // Y si no  imprimimos el otro mensaje
  response.write("No se que hacer, ayuda"); // escribimos la respuesta
  response.end(); // terminamos la respuesta y la enviamos
});

// Ponemos al servidor a escuchar en un puerto
server.listen(8000, () => {
  console.log("Servidor iniciado en el puerto 8000");
});
