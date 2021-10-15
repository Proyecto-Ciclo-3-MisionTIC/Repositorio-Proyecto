import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, Alert } from "reactstrap";
import { Link } from "react-router-dom";
import Axios from "axios";
import { useHistory } from "react-router-dom";

export const AgregarEmpleadoForm = () => {
  const [nombreEmpleado, setNombreEmpleado] = useState("")
  const [rolEmpleado, setRolEmpleado] = useState("")
  const [estadoEmpleado, setEstadoEmpleado] = useState("")
  const [error, setError] = useState(false)
  const history = useHistory()

  const agregarEmpleado = async () => {

    const res = await Axios.post("http://localhost:3001/agregarrol", {
        nombreEmpleado: nombreEmpleado,
        rolEmpleado: rolEmpleado,
        estadoEmpleado: estadoEmpleado,
    });


    if ((res.data = "enviadoempleado")) {
      history.push("/listarroles");
    } else {
      setError(true)
      setTimeout(() => {
        setError(false)
      }, 5000);
    }
  };

  return (
    <div>
      <section>
        <ul className="OpcionesProductos">
          <li>
            <div style={{ margin: "30px" }}>
              {" "}
              <Link to="/listarroles">
                <Button color="primary">Ver lista de empleados</Button>
              </Link>
            </div>
          </li>
        </ul>
      </section>


      <Form className="w-75">
        <FormGroup className="mb-3">
          <h2 className="TituloFormProductos"> Adicionar empleado </h2>
          <Label for="nombreEmpleado">Nombre del empleado</Label>
          <Input
            type="text"
            onChange={(e) => {
              setNombreEmpleado(e.target.value);
            }}
            name="nombreEmpleado"
            id="nombreEmpleado"
            placeholder="Inserte nombre del empleado"
          />
        </FormGroup>

        <FormGroup className="mb-3">
          <Label for="rolEmpleado">Rol del empleado</Label>
          <Input
            type="text"
            onChange={(e) => {
              setRolEmpleado(e.target.value);
            }}
            name="rolEmpleado"
            id="rolEmpleado"
            placeholder="Ingrese el rol del empleado"
          />
        </FormGroup>


        <FormGroup className="mb-3">
          <Label for="estadoEmpleado">Estado empleado</Label>
          <select
            className="select"
            type="text"
            onChange={(e) => {
              setEstadoEmpleado(e.target.value);
            }}
            name="estadoEmpleado"
            required
            defaultValue={0}
          >
            <option disabled value={0}>
            Seleccione una opción
          </option>
          <option>Activo</option>
          <option>Inactivo</option>
          </select>
        </FormGroup>

        <div
          style={{ display: "flex", width: "100%", justifyContent: "flex-end" }}
        >
          <Button className="mx-3">Cancelar</Button>

          <Button onClick={() => agregarEmpleado()} color="primary">
            Guardar
          </Button>
        </div>
        {error && (
          <Alert color="danger" className='mt-3'> Error guardando empleado </Alert>
        )}
      </Form>
    </div>
  );
};
