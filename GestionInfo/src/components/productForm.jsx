import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

export const ProductForm = () => {
  return (
    <div >
      <section > 
      <ui className="OpcionesProductos">
        <li><div style={{margin: "30px" }}> <Button color="primary">Ver lista de productos</Button></div></li>
        <li><div style={{margin: "30px" }}> <Button color="primary">Buscar producto</Button></div></li>
        <li><div style={{margin: "30px" }}> <Button color="primary">Actualizar producto</Button></div></li>
        <li><div style={{margin: "30px" }}> <Button color="primary">Eliminar producto</Button></div></li>
      </ui>
      </section>
      <Form className="w-75">
        <FormGroup className="mb-3">
          <h2 className ='TituloFormProductos' > Adicionar producto </h2>
          <Label for="codigo">Código</Label>
          <Input
            type="number"
            name="codigo"
            id="codigo"
            placeholder="Inserte Código"
          />
        </FormGroup>

        <FormGroup className="mb-3">
          <Label for="descripcion">Descripción</Label>
          <Input
            type="text"
            name="descripcion"
            id="descripcion"
            placeholder="Inserte Descripción"
          />
        </FormGroup>

        <FormGroup className="mb-3">
          <Label for="valor">Valor</Label>
          <Input
            type="number"
            name="precio"
            id="precio"
            placeholder="Inserte Valor"
          />
        </FormGroup>

        <FormGroup tag="fieldset" className="mb-3">
          <legend>Estado</legend>
          <FormGroup>
            <Label>
              <Input type="radio" name="disponible" />
              Disponible
            </Label>
          </FormGroup>
          <FormGroup>
            <Label>
              <Input type="radio" name="disponible" />
              No Disponible
            </Label>
          </FormGroup>
        </FormGroup>

        <div
          style={{ display: "flex", width: "100%", justifyContent: "flex-end" }}
        >
          <Button className="mx-3">Cancelar</Button>
          <Button color="primary">Guardar</Button>
        </div>
      </Form>
    </div>
  );
};
