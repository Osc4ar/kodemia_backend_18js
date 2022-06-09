require("dotenv").config(); // las variables del .env se agregan a process.env

// Importamos paquetes con require
const express = require("express");
const mongoose = require("mongoose");

const koderRouter = require("./routers/koder.router");

// Inicializamos constantes con la configuracion
const PORT = process.env.PORT;

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_HOST = process.env.DB_HOST;
const DB_NAME = process.env.DB_NAME;

const URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

const app = express();

app.use(express.json());
app.use("/koders", koderRouter);

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
