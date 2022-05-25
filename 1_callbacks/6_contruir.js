// Estamos construyendo un muro, y hay tres acciones que deben hacerse una después de la otra
function construir(muro, callback) {
  console.log("Construyendo...");

  setTimeout(() => {
    muro.contruido = true;
    callback(muro); // El muro ya fue construido
  }, 500);
}

function aplanar(muro, callback) {
  console.log("Aplanando...");

  setTimeout(() => {
    muro.aplanado = true;
    callback(muro);
  }, 300);
}

function pintar(muro, callback) {
  console.log("Pintando...");

  setTimeout(() => {
    muro.pintado = true;
    callback(muro);
  }, 240);
}

const muro = {
  contruido: false,
  aplanado: false,
  pintado: false,
};

// const muroContruido = construir(muro);
// console.log("Muro Construido:", muroContruido);

// const muroAplanado = aplanar(muroContruido);
// console.log("Muro Aplanado:", muroAplanado);

// const muroPintado = pintar(muroAplanado);
// console.log("Muro Pintado:", muroPintado);

construir(muro, (muroConstruido) => {
    aplanar(muroConstruido, (muroAplanado) => {
        pintar(muroAplanado, (muroPintado) => {
            console.log('Muro terminado!', muroPintado)
        })
    })
})