//console.log("Hola Mundo");
const express = require('express')
const app = express()
const mysql = require('mysql2/promise');
const port = 3001
const bluebird = require('bluebird');
let connection;

//configura el servidor para recibir datos en formato json
const cors = require('cors');
app.use(cors());
app.options('*', cors());
app.use(express.json());

const data = () => {

}
app.listen(port, async () => {
  connection = await mysql.createConnection({
    host: 'localhost',
    user: 'db_user',
    password: 'db_user',
    database: 'minticshop',
    Promise: bluebird
});
  console.log("Server running on port: " + port);
})

//app.post("/add-product", (request, response)=>{
//  response.send("Post request");
//})

app.get("/get-user", async (request, response) => {
  const [rows, fields] = await connection.execute("SELECT usuario.id_usuario 'Codigo', concat(usuario.nombre, ' ', usuario.apellido) as 'Nombre', rol.descripcion 'Rol', estado_aut.descripcion 'Estado' FROM minticshop.usuario, minticshop.rol, minticshop.estado_aut WHERE minticshop.usuario.id_rol = minticshop.rol.id_rol and minticshop.usuario.id_estado_aut = minticshop.estado_aut.id_estado_aut order by id_usuario;");
  response.json({data: rows});
  response.send("Todo ok");
})

app.post('/add-product', async (req, res) => {
  const [name, price, stock, description] = req.body;
  //const product = req.body;
  //const name = product.name;
  //const price = product.price;
  //const stock = product.stock;
  //const description = product.description;
  await connection.execute(`INSERT INTO products (name,price,stock,description) VALUES ('${name}',${price},${stock},'${description}')`);
  console.log(product.name,",",product.price,",",product.stock,",",product.description)
  res.json(product)
})

app.put('/update-product', async (req, res) => {
  const product = req.body;
  console.log(product.name)
  res.json(product)
})

app.delete('/delete-product', (req, res) => {
  const product = req.body;
  console.log(product.name)
  res.json(product)
})