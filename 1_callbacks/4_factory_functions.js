function factory(mensaje) {
  console.log("Trabajando...");

  return function () {
    console.log("Mensaje:", mensaje);
  };
}

const saludar = factory("Saludando!!");
const despedir = factory("Adios!!!");


saludar()