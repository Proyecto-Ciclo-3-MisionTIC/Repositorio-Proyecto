import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

export const ProductForm = () => {
  return (
    <Form className="w-75">
      <FormGroup className="mb-3">
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
          name="valor"
          id="valor"
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
  );
};
