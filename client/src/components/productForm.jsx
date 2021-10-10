import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Link } from "react-router-dom";
import Axios from "axios";

export const ProductForm = () => {
  const [nombreProducto, setNombreProducto] = useState("");
  const [precioProducto, setPrecioProducto] = useState(0);
  const [estadoProducto, setEstadoProducto] = useState("");


  const agregarProducto = () => {
    Axios.post("http://localhost:3001/agregarproducto", {
      nombreProducto: nombreProducto,
      precioProducto: precioProducto,
      estadoProducto: estadoProducto,
    });
  };

  return (
    <div>
      <section>
        <ui className="OpcionesProductos">
          <li>
            <div style={{ margin: "30px" }}>
              {" "}
              <Link to="/listarproductos">
                <Button color="primary">Ver lista de productos</Button>
              </Link>
            </div>
          </li>
        </ui>
      </section>
      <Form className="w-75">
        <FormGroup className="mb-3">
          <h2 className="TituloFormProductos"> Adicionar producto </h2>
          <Label for="nombreProducto">Nombre del producto</Label>
          <Input
            type="text"
            onChange={(e) => {
              setNombreProducto(e.target.value);
            }}
            name="nombreProducto"
            id="nombreProducto"
            placeholder="Inserte nombre del producto"
          />
        </FormGroup>

        <FormGroup className="mb-3">
          <Label for="precioProducto">Valor</Label>
          <Input
            type="number"
            onChange={(e) => {
              setPrecioProducto(e.target.value);
            }}
            name="precio"
            id="precio"
            placeholder="Inserte precio"
          />
        </FormGroup>

        <FormGroup className="mb-3">
          <Label for="estadoProducto">Estado</Label>
          <select
            type="text"
            onChange={(e) => {setEstadoProducto(e.target.value);}}
            name='estadoProducto'
            required
            defaultValue={0}
          >
            <option disabled value={0}>
              Seleccione una opción
            </option>
            <option>Disponible</option>
            <option>No disponible</option>
          </select>
        </FormGroup>

        <div
          style={{ display: "flex", width: "100%", justifyContent: "flex-end" }}
        >
          <Button className="mx-3">Cancelar</Button>
          <Link to="/listarproductos">
            <Button onClick={() => agregarProducto()} color="primary">
              Guardar
            </Button>
          </Link>
        </div>
      </Form>
    </div>
  );
};
