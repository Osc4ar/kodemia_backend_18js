// Estamos construyendo un muro, y hay tres acciones que deben hacerse una después de la otra
function construir(muro) {
  console.log("Construyendo...");

  setTimeout(() => {
    muro.contruido = true;
  }, 500);
}

function aplanar(muro) {
  console.log("Aplanando...");

  setTimeout(() => {
    muro.aplanado = true;
  }, 200);
}

function pintar(muro) {
  console.log("Pintando...");

  setTimeout(() => {
    muro.pintado = true;
  }, 100);
}

const muro = {
  contruido: false,
  aplanado: false,
  pintado: false,
};

const muroContruido = construir(muro);
console.log('Muro Construido:', muroContruido)

const muroAplanado = aplanar(muroContruido);
console.log('Muro Aplanado:', muroAplanado)

const muroPintado = pintar(muroAplanado);
console.log('Muro Pintado:', muroPintado)




