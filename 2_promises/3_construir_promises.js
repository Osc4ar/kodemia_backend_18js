// Estamos construyendo un muro, y hay tres acciones que deben hacerse una después de la otra
function construir(muro) {
  console.log("Construyendo...");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      muro.construido = "❌";

      if (muro.construido !== "✅") {
        reject(new Error("No se pudo construir el muro"));
      }

      resolve(muro); // El muro ya fue construido
    }, 1500);
  });
}

function aplanar(muro) {
  console.log("Aplanando...");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      muro.aplanado = "✅";

      if (muro.construido !== "✅" || muro.aplanado !== "✅") {
        reject(new Error("No se pudo aplanar el muro"));
      }

      resolve(muro);
    }, 1000);
  });
}

function pintar(muro) {
  console.log("Pintando...");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      muro.pintado = "✅";

      if (
        muro.construido !== "✅" ||
        muro.aplanado !== "✅" ||
        muro.pintado !== "✅"
      ) {
        reject(new Error("No se pudo pintar el muro"));
      }

      resolve(muro);
    }, 500);
  });
}

const muro = {
  construido: "❌",
  aplanado: "❌",
  pintado: "❌",
};

// construir(muro)
//   .then((muroConstruido) => {
//     console.log("Muro en primer then:", muroConstruido);

//     // Esta promesa se pasa al then de abajo, usando return
//     return aplanar(muroConstruido);
//   })
//   .then((muroAplanado) => {
//     console.log("Muro en segundo then:", muroAplanado);

//     return pintar(muroAplanado);
//   })
//   .then((muroPintado) => {
//     console.log("Muro en tercer then:", muroPintado);

//     console.log("Terminamos el muro!");
//   })
//   .catch((error) => {
//     console.log("Un error!", error);
//   });

async function ordernarConstruccion() {
  try {
    await construir(muro);
    await aplanar(muro);
    await pintar(muro);

    console.log("Se terminó el muro!", muro);
  } catch (error) {
    console.error("En el catch, hay otro error!", error);
  }
  console.log("El programa sigue vivo!");
}
ordernarConstruccion();
