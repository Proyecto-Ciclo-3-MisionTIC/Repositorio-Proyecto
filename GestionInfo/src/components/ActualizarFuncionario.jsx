import React from 'react'

const ActualizarFuncionario = () => {
    return (
        <div >
        
        <Form className="w-75">
          <FormGroup className="mb-3">
            <h2 className ='TituloFormProductos' > Actualizar funcionario </h2>
            <Label for="codigo">Actualizar nombre</Label>
            <Input
              type="text"
              name="descripción"
              id="descripción"
              placeholder="Ingrese el nuevo nombre"
            />
          </FormGroup>

          <FormGroup className="mb-3">
            <Label for="descripcion">Actualizar el rol</Label>
            <Input
              type="text"
              name="precio"
              id="precio"
              placeholder="Ingrese el nuevo rol"
            />
          </FormGroup>

          <FormGroup className="mb-3">
            <Label for="descripcion">Actualizar estado</Label>
            <Input
              type="text"
              name="precio"
              id="precio"
              placeholder="Ingrese el nuevo estado"
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

export default ActualizarFuncionario
