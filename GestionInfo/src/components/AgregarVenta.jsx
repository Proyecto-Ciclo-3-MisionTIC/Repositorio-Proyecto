import React from 'react'
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Link } from 'react-router-dom';

const AgregarVenta = () => {
    return (
    <div >
         <section>
        <ui className="OpcionesProductos">
          <li>
            <div style={{ margin: "30px" }}>
              {" "}
              <Link to ='/listarventas'>
              <Button color="primary">Ver lista de ventas</Button>
              </Link>
            </div>
          </li>
        </ui>
      </section>
        <Form className="w-75">
          <FormGroup className="mb-3">
            <h2 className ='TituloFormProductos' > Adicionar venta </h2>
            <Label for="codigoVenta">Código venta</Label>
            <Input
              type="number"
              name="codigoVenta"
              id="codigoVenta"
              placeholder="Inserte Código de la Venta"
            />
          </FormGroup>
  
          <FormGroup className="mb-3">
            <Label for="identificador">Identificador</Label>
            <Input
              type="text"
              name="identificador"
              id="identificador"
              placeholder="Inserte identificador de la venta"
            />
          </FormGroup>
  
          <FormGroup className="mb-3">
            <Label for="precioUnitario">Precio unitario</Label>
            <Input
              type="number"
              name="precioUnitario"
              id="precioUnitario"
              placeholder="Inserte precio unitario de la venta"
            />
          </FormGroup>

          <FormGroup className="mb-3">
            <Label for="cantidad">Cantidad</Label>
            <Input
              type="number"
              name="cantidad"
              id="cantidad"
              placeholder="Cantidad de la venta"
            />
          </FormGroup>

          <FormGroup className="mb-3">
            <Label for="fechaVenta">Fecha de la venta</Label>
            <Input
              type="date"
              name="fechaVenta"
              id="fechaVenta"
              placeholder="Fecha de la venta"
            />
          </FormGroup>

          <FormGroup className="mb-3">
            <Label for="documentoCliente">Documento del cliente</Label>
            <Input
              type="number"
              name="documentoCliente"
              id="documentoCliente"
              placeholder="Escriba el nombre del cliente"
            />
          </FormGroup>

          <FormGroup className="mb-3">
            <Label for="idVendedor">Identificación del vendedor</Label>
            <Input
              type="number"
              name="idVendedor"
              id="idVendedor"
              placeholder="Escriba número de identificación del vendedor"
            />
          </FormGroup>
  
          <FormGroup tag="fieldset" className="mb-3">
            <legend>Estado</legend>
            <FormGroup>
              <Label>
                <Input type="radio" name="alistamiento" />
                Alistamiento
              </Label>
            </FormGroup>
            <FormGroup>
              <Label>
                <Input type="radio" name="enRuta" />
                En ruta
              </Label>
            </FormGroup>
          </FormGroup>
          <FormGroup>
              <Label>
                <Input type="radio" name="entregado" />
                Entregado
              </Label>
            </FormGroup>
  
          <div
            style={{ display: "flex", width: "100%", justifyContent: "flex-end" }}
          >
            <Button className="mx-3">Cancelar venta </Button>
            <Link to='/listarventas'>
            <Button color="primary">Adicionar venta</Button>
            </Link>
          </div>
        </Form>
      </div>
    )
}

export default AgregarVenta
