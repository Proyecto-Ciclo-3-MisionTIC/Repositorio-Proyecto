import React, { useState } from "react";
import { Button, Input } from "reactstrap";
import Axios from "axios";

export const EditarEmpleado = ({ val, cancel }) => {
  const [nombreEmpleado, setNombreEmpleado] = useState("")
  const [rolEmpleado, setRolEmpleado] = useState("")
  const [estadoEmpleado, setEstadoEmpleado] = useState("")

  const editarEmpleado = async () => {
    debugger
    await Axios.put("http://localhost:3001/editarrol", {
      id: val._id,
      nombreEmpleado: nombreEmpleado,
      rolEmpleado: rolEmpleado,
      estadoEmpleado: estadoEmpleado,
    });
  };

  return (
    <tr>
      <td>{val._id}</td>
      <td>
        <Input
          type="text"
          onChange={(e) => {
            setNombreEmpleado(e.target.value);
          }}
          name="nombreEmpleado"
          id="nombreEmpleado"
          placeholder="Inserte nombre del empleado"
        />
      </td>
      <td>
        <Input
          type="text"
          onChange={(e) => {
            setRolEmpleado(e.target.value);
          }}
          name="rolEmpleado"
          id="rolEmpleado"
          placeholder="Inserte rol del empleado"
        />
      </td>
      <td>
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
      </td>
      <th>
        <Button color="primary" onClick={cancel}>
          Cancelar
        </Button>
      </th>
      <th>
        <Button color="danger" onClick={() => editarEmpleado()}>
          Guardar
        </Button>
      </th>
    </tr>
  );
};
