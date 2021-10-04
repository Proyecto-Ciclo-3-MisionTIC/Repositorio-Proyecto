import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const ActualizarProductoForm = () => {
    return (
        <div >
        
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
            <Link to='/listarproductos'>
            <Button color="primary">Actualizar</Button>
            </Link>
          </div>
        </Form>
      </div>
    )
}

export default ActualizarProductoForm
