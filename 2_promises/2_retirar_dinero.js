function retirarDinero(cantidad) {
  return new Promise((resolve, reject) => {
    console.log("procesando su petición");
    console.log(`la cantidad a retirar es: ${cantidad}`);

    if (cantidad < 100) {
      reject("Solo puedo darte más de $100");
    }

    resolve(`$${cantidad}.00`);
  });
}

// Promesa de $2000, la cual es exitosa
const promesa2000 = retirarDinero(2000);
promesa2000
  .then((dinero) => {
    console.log("El cajero me dió:", dinero);
  })
  .catch((error) => {
    console.error("El cajero falló, el error es", error);
  });

// Promesa de $10, la cual va a fallar
const promesa10 = retirarDinero(10);
promesa10
  .then((dinero) => {
    console.log("El cajero me dió:", dinero);
  })
  .catch((error) => {
    console.error("El cajero falló, el error es", error);
  });
