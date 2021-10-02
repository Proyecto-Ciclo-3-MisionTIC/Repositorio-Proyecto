import React from 'react'
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const ActualizarProductoForm = () => {
    return (
        <div >
        <section > 
        <ui className="OpcionesProductos">
          <li><div style={{margin: "30px" }}> <Button color="primary">Ver lista de productos</Button></div></li>
          <li><div style={{margin: "30px" }}> <Button color="primary">Adicionar producto</Button></div></li>
          <li><div style={{margin: "30px" }}> <Button color="primary">Buscar producto</Button></div></li>
          <li><div style={{margin: "30px" }}> <Button color="primary">Eliminar producto</Button></div></li>
        </ui>
        </section>
        <Form className="w-75">
          <FormGroup className="mb-3">
            <h2 className ='TituloFormProductos' > Actualizar producto </h2>
            <Label for="codigo">Actualizar descripción</Label>
            <Input
              type="text"
              name="descripción"
              id="descripción"
              placeholder="Ingrese la nueva descripción"
            />
          </FormGroup>
  
          <FormGroup className="mb-3">
            <Label for="descripcion">Actualizar el precio</Label>
            <Input
              type="number"
              name="precio"
              id="precio"
              placeholder="Ingrese el nuevo valor"
            />
          </FormGroup>
  
          <div
            style={{ display: "flex", width: "100%", justifyContent: "flex-end" }}
          >
            <Button color="primary">Actualizar</Button>
          </div>
        </Form>
      </div>
    )
}

export default ActualizarProductoForm
