import React, { useState, useEffect } from "react";
import { Table, Button } from "reactstrap";
import {
  Pagination,
  PaginationItem,
  PaginationLink,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { Link } from "react-router-dom";
import Axios from "axios";
import { EmpleadoItenRow } from "./EmpleadoItenRow";

const ListaEmpleadosTabla = () => {
  const [listaEmpleados, setListaEmpleados] = useState([]);

  useEffect(() => {
    if(!listaEmpleados.length) {
      Axios.get("http://localhost:3001/listarroles").then((response) => {
        setListaEmpleados(response.data);
      });
    }
  })

  const executeSearch = (vl) => {

    const newList = listaEmpleados.filter((item) => {
      return JSON.stringify(item)
        .toLowerCase()
        .includes(vl?.toLowerCase());
    });
    vl ? setListaEmpleados(newList) : setListaEmpleados([])
  };

  return (
    <div>
      <section>
        <Link to="/agregarroles">
          <Button color="primary" size="lg">
            Adicionar empleado
          </Button>
        </Link>
      </section>

      <FormGroup className="mt-3 w-100">
        <Label for="Search">Buscar empleado</Label>
        <Input
          type="text"
          onChange={(e) => {
            executeSearch(e.target.value);
          }}
          name="Search"
          id="Search"
          placeholder="Buscar...."
        />
      </FormGroup>

      {listaEmpleados.map((val, key) => {
        return (
          <Table striped key={key}>
            <thead>
              <tr>
                <th>Código del empleado</th>
                <th>Nombre del empleado</th>
                <th>Rol</th>
                <th>Estado</th>
                <th>Actualizar</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody>
              <EmpleadoItenRow val={val} />
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

export default ListaEmpleadosTabla;
