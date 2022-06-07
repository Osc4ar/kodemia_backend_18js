const mongoose = require("mongoose");

const koderSchema = new mongoose.Schema({
  nombre: String,
  genero: String,
  edad: Number,
});

const Koder = mongoose.model("koders", koderSchema);

// Exportamos el modelo de Koder
module.exports = Koder;
