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

function crearMiddlware() {
  console.log("creando middleware");
  return (req, res, next) => {
    console.log("Middleware fabricado");
    console.log("Method:", req.method);
    console.log("URL:", req.originalUrl);

    next();
  };
}

app.use(express.json());
app.use((req, res, next) => {
  console.log("Hola desde este otro middleware");

  next();
});
app.use(crearMiddlware());

app.get("/koders", async (req, res) => {
  const koders = await Koder.find({});

  res.json(koders);
});

app.get(
  "/",
  (req, res, next) => {
    console.log("EN middleware de endpoint");
    res.statusCode = 205;

    next();
  },
  async (req, res) => {
    res.json({ hola: "mundo" });
  }
);

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
