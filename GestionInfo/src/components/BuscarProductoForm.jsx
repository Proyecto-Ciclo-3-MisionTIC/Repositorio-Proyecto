import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const BuscarProductoForm = () => {
  return (
    <div>
      <section>
        <ui className="OpcionesProductos">
          <li>
            <div style={{ margin: "30px" }}>
              {" "}
              <Button color="primary">Ver lista de productos</Button>
            </div>
          </li>
          <li>
            <div style={{ margin: "30px" }}>
              {" "}
              <Button color="primary">Adicionar producto</Button>
            </div>
          </li>
          <li>
            <div style={{ margin: "30px" }}>
              {" "}
              <Button color="primary">Actualizar producto</Button>
            </div>
          </li>
          <li>
            <div style={{ margin: "30px" }}>
              {" "}
              <Button color="primary">Eliminar producto</Button>
            </div>
          </li>
        </ui>
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
