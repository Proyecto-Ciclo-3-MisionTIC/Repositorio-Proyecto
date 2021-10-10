import React, { useState, useEffect } from "react";
import { Table } from "reactstrap";
import { Button } from "reactstrap";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { Link } from "react-router-dom";
import Axios from "axios";

const ListaProductosTabla = () => {
  const [listaProductos, setListaProductos] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/listarproductos").then((response) => {
      console.log(response);
      setListaProductos(response.data);
    });
  }, []);
  return (
    <div>
      <section>
        <Link to="/agregarproductos">
          <Button color="primary" size="lg">
            Adicionar producto
          </Button>
        </Link>{" "}
        <Link to="/buscarproductos">
          <Button color="secondary" size="lg">
            Buscar producto
          </Button>
        </Link>
      </section>
      {listaProductos.map((val, key) => {
        return (
          <Table striped>
            <thead>
              <tr>
                <th>Código del producto</th>
                <th>Nombre del producto</th>
                <th>Valor Unitario</th>
                <th>Estado</th>
                <th>Actualizar</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{val._id}</td>
                <td>{val.nombreProducto}</td>
                <td>{val.precioProducto}</td>
                <td>{val.estadoProducto}</td>
                <th>
                  <Link to="/actualizarproducto">
                    <Button color="primary">Actualizar producto</Button>
                  </Link>
                </th>
                <th>
                  <Button color="danger">Eliminar producto</Button>
                </th>
              </tr>
            </tbody>
          </Table>
        );
      })}

      <section
        style={{ display: "flex", width: "100%", justifyContent: "flex-end" }}
      >
        <Pagination aria-label="Page navigation example">
          <PaginationItem>
            <PaginationLink first href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink previous href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">4</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">5</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink next href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink last href="#" />
          </PaginationItem>
        </Pagination>
      </section>
    </div>
  );
};

export default ListaProductosTabla;
