import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Link } from 'react-router-dom';

const BuscarProductoForm = () => {
  return (
    <div>
      <section>
        <ul className="OpcionesProductos">
          <li>
            <div style={{ margin: "30px" }}>
              {" "}
              <Link to='/listarproductos'>
              <Button color="primary">Ver lista de productos</Button>
              </Link>
            </div>
          </li>
        </ul>
      </section>
      <Form className="w-75">
        <FormGroup className="mb-3">
          <h2 className="TituloFormProductos"> Buscar producto </h2>
          <Label for="codigo">Busqueda por código</Label>
          <Input
            type="number"
            name="codigo"
            id="codigo"
            placeholder="Inserte Código"
          />
        </FormGroup>

        <FormGroup className="mb-3">
          <Label for="descripcion">Busqueda por descripción</Label>
          <Input
            type="text"
            name="descripcion"
            id="descripcion"
            placeholder="Inserte Descripción"
          />
        </FormGroup>

        <div
          style={{ display: "flex", width: "100%", justifyContent: "flex-end" }}
        >
          <Button color="primary">Buscar</Button>
        </div>
      </Form>
    </div>
  );
};

export default BuscarProductoForm;
