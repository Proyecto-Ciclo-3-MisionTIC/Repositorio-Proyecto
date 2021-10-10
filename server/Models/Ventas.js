const mongoose = require("mongoose");

const VentaSchema = new mongoose.Schema({
  nombreVenta: {
    type: String,
    required: true,
  },
  precioVenta: {
    type: Number,
    required: true,
  },
  cantidad: {
    type: Number,
    required: true,
  },
  fecha: {
    type: String,
    required: true,
  },
  documentoCliente: {
    type: Number,
    required: true,
  },
  clienteNombre: {
    type: String,
    required: true,
  },
});

const Venta = mongoose.model("Venta", VentaSchema);
module.exports = Venta;
