require("dotenv").config(); // las variables del .env se agregan a process.env

// Importamos paquetes con require
const express = require("express");
const mongoose = require("mongoose");

const Koder = require("./models/koder.model");

// Inicializamos constantes con la configuracion
const PORT = process.env.PORT;

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_HOST = process.env.DB_HOST;
const DB_NAME = process.env.DB_NAME;

const URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

const app = express();

app.use(express.json());

app.get("/koders", async (req, res) => {
  const edad = Number(req.query.edad);
  const genero = req.query.genero;

  const filtro = {};

  const edadExiste = !Number.isNaN(edad);
  if (edadExiste) {
    filtro.edad = edad; // {edad: edad}
  }

  const generoExiste = genero !== undefined;
  if (generoExiste) {
    filtro.genero = genero; // {genero: genero}
  }

  const koders = await Koder.find(filtro);

  res.json(koders);
});

app.post("/koders", async (req, res) => {
  const objetoKoder = req.body; // Objeto de JS

  const newKoder = new Koder(objetoKoder); // Instancia de modelo Koder

  await Koder.create(newKoder);

  res.statusCode = 201;
  res.json(newKoder);
});

app.get("/", async (req, res) => {
  res.json({ hola: "mundo" });
});

// Ejecutamos server y conectamos BD
mongoose
  .connect(URL)
  .then(() => {
    console.log("Estamos conectados a la BD!");

    app.listen(PORT, () => {
      console.log("Server ejecutandose en el puerto:", PORT);
    });
  })
  .catch((error) => {
    console.error("Hubo un error:", error);
  });
