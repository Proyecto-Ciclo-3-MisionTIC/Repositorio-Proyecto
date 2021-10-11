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

app.post("/agregarventa", async (req, res) => {
  const nombreVenta = req.body.nombreVenta;
  const precioVenta = req.body.precioVenta;
  const cantidadVenta = req.body.cantidadVenta;
  const fechaVenta = req.body.fechaVenta;
  const idClienteVenta = req.body.idClienteVenta;
  const nombreClienteVenta = req.body.nombreClienteVenta;
  const idVendedorVenta = req.body.idVendedorVenta;
  const estadoVenta = req.body.estadoVenta;

  const venta = new VentasModel({
    nombreVenta: nombreVenta,
    precioVenta: precioVenta,
    cantidadVenta: cantidadVenta,
    fechaVenta: fechaVenta,
    idClienteVenta: idClienteVenta,
    nombreClienteVenta: nombreClienteVenta,
    idVendedorVenta: idVendedorVenta,
    estadoVenta: estadoVenta,
  });

  try {
    await venta.save();
    res.send("enviadaVenta");
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

app.put("/editarventa", async (req, res) => {
  const id = req.body.id;
  const nombreVenta = req.body.nombreVenta;
  const precioVenta = Number(req.body.precioVenta);
  const cantidadVenta = Number(req.body.cantidadVenta);
  const fechaVenta = req.body.fechaVenta;
  const idClienteVenta = Number(req.body.idClienteVenta);
  const nombreClienteVenta = req.body.nombreClienteVenta;
  const idVendedorVenta = Number(req.body.idVendedorVenta);
  const estadoVenta = req.body.estadoVenta;

  try {
    await VentaModel.findById(id, (err, objUpdatre) => {
      objUpdatre.nombreVenta = nombreVenta;
      objUpdatre.precioVenta = Number(precioVenta);
      objUpdatre.cantidadVenta = Number(cantidadVenta);
      objUpdatre.fechaVenta = fechaVenta;
      objUpdatre.idClienteVenta = Number(idClienteVenta);
      objUpdatre.nombreClienteVenta = nombreClienteVenta;
      objUpdatre.idVendedorVenta = Number(idVendedorVenta);
      objUpdatre.estadoVenta = estadoVenta;
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

app.get("/listarventas", async (req, res) => {
  VentasModel.find({}, (error, resultado) => {
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

app.delete("/eliminarventa/:id", async (req, res) => {
  const id = req.params.id;
  await VentasModel.findByIdAndRemove(id).exec()
  res.send('deleted');
});

app.listen(3001, () => console.log("Server running on port 3001..."));
