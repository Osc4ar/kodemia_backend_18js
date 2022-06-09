const express = require("express");
const Koder = require("../usecases/koder.usecase");

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

  const koders = await Koder.getKoders(filtro);

  res.json(koders);
});

router.post("/", async (req, res) => {
  const newKoder = await Koder.createKoder(req.body);

  res.statusCode = 201;
  res.json(newKoder);
});

module.exports = router;
