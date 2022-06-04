const mongoose = require("mongoose");

const DB_USER = "oscar";
const DB_PASSWORD = "kodemia123";
const DB_HOST = "cluster0.ewk3igo.mongodb.net";
const URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/?retryWrites=true&w=majority`;

mongoose
  .connect(URL)
  .then((connection) => {
    console.log("Estamos conectados a nuestra Base de Datos!");
  })
  .catch((error) => {
    console.error("No nos conectamos a la Base de Datos");
    console.error(error);
  });
