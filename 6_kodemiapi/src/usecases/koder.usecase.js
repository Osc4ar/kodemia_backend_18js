const Koder = require("../models/koder.model");

async function getKoders(filter) {
  const koders = await Koder.find(filter);

  return koders;
}

async function createKoder(koder) {
  const newKoder = new Koder(koder); // Instancia de modelo Koder

  await Koder.create(newKoder);

  return newKoder;
}

module.exports = {
  getKoders,
  createKoder,
};
