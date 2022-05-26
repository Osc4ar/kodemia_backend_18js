const promesa = new Promise((resolve, reject) => {
  //   resolve('exito');
  reject("Todo salio mal");
});

promesa
  .then((unValor) => {
    console.log("Resultado:", unValor);
  })
  .catch((unError) => {
    console.log("El error es:", unError);
  });
