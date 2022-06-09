const express = require("express");
const Koder = require("../models/koder.model");

const router = express.Router();

router.get("/", async (req, res) => {
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

router.post("/", async (req, res) => {
  const objetoKoder = req.body; // Objeto de JS

  const newKoder = new Koder(objetoKoder); // Instancia de modelo Koder

  await Koder.create(newKoder);

  res.statusCode = 201;
  res.json(newKoder);
});

module.exports = router;
