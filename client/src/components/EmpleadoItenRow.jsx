import { Button } from "reactstrap";
import React, { useState } from "react";
import { EditarEmpleado } from "./EditarEmpleado";
import ModalBorrarEmpleado from "./ModalBorrarEmpleado";

export const EmpleadoItenRow = ({ val }) => {
  const [showForm, setShowForm] = useState(false);
  const toggleForm = () => setShowForm(!showForm);

  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);

  return (
    <>
      {showForm ? (
        <EditarEmpleado val={val} cancel={toggleForm} />
      ) : (
        <tr>
          <td>{val._id}</td>
          <td>{val.nombreEmpleado}</td>
          <td>{val.rolEmpleado}</td>
          <td>{val.estadoEmpleado}</td>
          <th>
            <Button color="primary" onClick={toggleForm}>
              Actualizar empleado
            </Button>
          </th>
          <th>
            <Button color="danger" onClick={() => toggleModal()}>
              Eliminar empleado
            </Button>
          </th>
          <ModalBorrarEmpleado
            id={val._id}
            tipo="empleado"
            nombre={val.nombreEmpleado}
            modal={modal}
            toggle={toggleModal}
          />
        </tr>
      )}
    </>
  );
};
