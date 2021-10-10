import { Button } from "reactstrap";
import React, { useState } from "react";
import { EditarProducto } from "./EditarProducto";
import ModalDeletar from "./ModalDeletar";

export const ProductoItemRow = ({ val }) => {
  const [showForm, setShowForm] = useState(false);
  const toggleForm = () => setShowForm(!showForm);

  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);

  return (
    <>
      {showForm ? (
        <EditarProducto val={val} cancel={toggleForm} />
      ) : (
        <tr>
          <td>{val._id}</td>
          <td>{val.nombreProducto}</td>
          <td>{val.precioProducto}</td>
          <td>{val.estadoProducto}</td>
          <th>
            <Button color="primary" onClick={toggleForm}>
              Actualizar producto
            </Button>
          </th>
          <th>
            <Button color="danger" onClick={() => toggleModal()}>
              Eliminar producto
            </Button>
          </th>
          <ModalDeletar
            id={val._id}
            tipo="producto"
            nombre={val.nombreProducto}
            modal={modal}
            toggle={toggleModal}
          />
        </tr>
      )}
    </>
  );
};
