import React from 'react'
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const EliminarProductoForm = () => {
    return (
        <div >
        <section > 
        <ui className="OpcionesProductos">
          <li><div style={{margin: "30px" }}> <Button color="primary">Ver lista de productos</Button></div></li>
          <li><div style={{margin: "30px" }}> <Button color="primary">Adicionar producto</Button></div></li>
          <li><div style={{margin: "30px" }}> <Button color="primary">Buscar producto</Button></div></li>
          <li><div style={{margin: "30px" }}> <Button color="primary">Actualizar producto</Button></div></li>
        </ui>
        </section>
        <Form className="w-75">
          <FormGroup className="mb-3">
            <h2 className ='TituloFormProductos' > Eliminar producto </h2>
            <Label for="codigo">Ingrese el código</Label>
            <Input
              type="number"
              name="codigo"
              id="codigo"
              placeholder="Inserte Código"
            />
          </FormGroup>
  
          <FormGroup className="mb-3">
            <Label for="descripcion">Ingrese la descripción</Label>
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
            <Button color="primary">Eliminar</Button>
          </div>
        </Form>
      </div>
    )
}

export default EliminarProductoForm
