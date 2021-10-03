import React from 'react'
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const BuscarVenta = () => {
    return (
<div>
      <section>
        <ui className="OpcionesProductos">
          <li>
            <div style={{ margin: "30px" }}>
              {" "}
              <Button color="primary">Ver lista de ventas</Button>
            </div>
          </li>
        </ui>
      </section>
      <Form className="w-75">
        <FormGroup className="mb-3">
          <h2 className="TituloFormProductos"> Buscar venta </h2>
          <Label for="codigo">Busqueda por identificador de la venta</Label>
          <Input
            type="number"
            name="codigo"
            id="codigo"
            placeholder="Inserte identificador"
          />
        </FormGroup>

        <FormGroup className="mb-3">
          <Label for="descripcion">Busqueda por nombre del ciente</Label>
          <Input
            type="text"
            name="descripcion"
            id="descripcion"
            placeholder="Inserte el nombre del cliente"
          />
        </FormGroup>

        <FormGroup className="mb-3">
          <Label for="descripcion">Busqueda por nombre del docoumento del ciente</Label>
          <Input
            type="text"
            name="descripcion"
            id="descripcion"
            placeholder="Inserte el número del documento de identidad del cliente"
          />
        </FormGroup>

        <div
          style={{ display: "flex", width: "100%", justifyContent: "flex-end" }}
        >
          <Button color="primary">Buscar</Button>
        </div>
      </Form>
    </div>
    )
}

export default BuscarVenta
