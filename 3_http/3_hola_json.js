const http = require("http");

const server = http.createServer((request, response) => {
  const objeto = {
    hola: "Mundo",
  };
  const unJSON = JSON.stringify(objeto);

  // Solo en ruta /hola y en método GET
  const method = request.method;
  const url = request.url;

  if (method === "GET" && url === "/hola") {
    response.setHeader("Content-Type", "application/json");
    response.write(unJSON);
  } else if (method === "POST" && url === "/koders") {
    response.statusCode = 201;
    response.write("Aquí puedes crear Koders");
  } else {
    response.statusCode = 404;
    response.write("Ruta no encontrada");
  }

  response.end();
});

server.listen(8000, () => {
  console.log("Server corriendo");
});
