const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");

const ProductoModel = require("./Models/Producto");
const VentasModel = require("./Models/Ventas");

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://gabito:gabito@crud.xxunc.mongodb.net/product?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
);

app.post("/agregarproducto", async (req, res) => {
  const nombreProducto = req.body.nombreProducto;
  const precioProducto = req.body.precioProducto;
  const estadoProducto = req.body.estadoProducto;

  const producto = new ProductoModel({
    nombreProducto: nombreProducto,
    precioProducto: precioProducto,
    estadoProducto: estadoProducto,
  });

  try {
    await producto.save();
    res.send("enviado");
  } catch (error) {
    console.log(error);
  }
});

app.put("/editarproducto", async (req, res) => {
  const id = req.body.id;
  const nombreProducto = req.body.nombreProducto;
  const precioProducto = Number(req.body.precioProducto);
  const estadoProducto = req.body.estadoProducto;

  try {
    await ProductoModel.findById(id, (err, objUpdatre) => {
      objUpdatre.nombreProducto = nombreProducto;
      objUpdatre.precioProducto = Number(precioProducto);
      objUpdatre.estadoProducto = estadoProducto;
      objUpdatre.save();
      res.send("update");
    });
  } catch (error) {
    console.log(error);
  }
});

app.get("/listarproductos", async (req, res) => {
  ProductoModel.find({}, (error, resultado) => {
    if (error) {
      res.send(error);
    }
    res.send(resultado);
  });
});

app.delete("/eliminar/:id", async (req, res) => {
  const id = req.params.id;
  await ProductoModel.findByIdAndRemove(id).exec()
  res.send('deleted');
});

app.get("/listarventas", async (req, res) => {
  const venta = new VentasModel({
    nombreVenta: "venta111",
    precioVenta: 111,
    cantidad: 1000,
    fecha: "hoy",
    documentoClient: 4444,
    clienteNombre: "nombre",
  });

  try {
    await venta.save();
    res.send('envio venta')
  } catch (error) {
    console.log(error);
  }
});

app.listen(3001, () => console.log("Server running on port 3001..."));
