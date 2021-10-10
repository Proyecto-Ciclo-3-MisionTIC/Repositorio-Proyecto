const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require ('cors')

const ProductoModel = require("./modulos/Producto");

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://gabito:gabito@crud.xxunc.mongodb.net/product?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
);

app.post("/agregarproducto", async (req, res) => {
    const nombreProducto = req.body.nombreProducto
    const precioProducto = req.body.precioProducto
    const estadoProducto = req.body.estadoProducto

    const producto = new ProductoModel({
    nombreProducto: nombreProducto,
    precioProducto: precioProducto,
    estadoProducto: estadoProducto,
  });

  try {
    await producto.save();
    res.send('enviado')
  } catch (error) {
    console.log(error);
  }
});

app.get("/listarproductos", async (req, res) => {
    ProductoModel.find({},(error, resultado) => {
        if(error){
            res.send(error);
        }
        res.send(resultado);
    })
});

app.listen(3001, () => console.log("Server running on port 3001..."));
