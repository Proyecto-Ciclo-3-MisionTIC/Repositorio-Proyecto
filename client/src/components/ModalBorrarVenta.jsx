import React from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader, Button } from "reactstrap";
import Axios from "axios";

function ModalDeletar({ id, tipo, nombre, modal, toggle }) {
  const deleteProduct = async () => {
    const res = await Axios.delete(`http://localhost:3001/eliminarventa/${id}`);
    if (res.data === "deleted") {
      window.location.reload()
    }
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Modal title</ModalHeader>
      <ModalBody>
        Esta seguro que desea eliminar el {tipo} {nombre}
      </ModalBody>
      <ModalFooter>
        <Button color="danger" onClick={deleteProduct}>
          Eliminar
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancelar
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default ModalDeletar;
