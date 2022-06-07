require("dotenv").config();
const mongoose = require("mongoose");

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_HOST = process.env.DB_HOST;
const DB_NAME = process.env.DB_NAME;
const URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

const koderSchema = new mongoose.Schema({
  nombre: String,
  genero: String,
  edad: Number,
});

const Koder = mongoose.model("koders", koderSchema);

mongoose
  .connect(URL)
  .then(async (connection) => {
    console.log("Estamos conectados a nuestra Base de Datos!");

    // const newKoder = new Koder({
    //   nombre: "Danny",
    //   genero: "masculino",
    //   edad: 20,
    // });
    // await Koder.create(newKoder);
    // console.log("Registro creado");
  })
  .catch((error) => {
    console.error("No nos conectamos a la Base de Datos");
    console.error(error);
  });
