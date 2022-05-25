// Una accion que no sabemos cuando terminara exactamente
function irACasa(callback) {
  console.log("Caminando a mi casa...");
  console.log("llegue a mi casa! :D");

  if (callback !== undefined) callback();
  else console.log("No hago nada mas");
}

function avisar() {
  console.log("Aviso que ya llegue");
}

function dormir() {
  console.log("A mimir");
}

// Ir a mi casa y luego aviso
// irACasa(avisar);

// Ir a mi casa y luego me duermo
// irACasa(dormir);

// Como irian a casa y no harian nada despues?
irACasa();
