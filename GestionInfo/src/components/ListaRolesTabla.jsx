import React from 'react'
import { Table } from 'reactstrap';
import { Button} from "reactstrap";
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { Link } from 'react-router-dom';

const ListaRolesTabla = () => {
    return (
        <div>
         <section>
        <ui className="OpcionesProductos">
          <li>
            <div style={{ margin: "30px" }}>
              {" "}
              <Link to = '/agregarfuncionario'>
              <Button color="primary">Adicionar funcionario</Button></Link>
            </div>
          </li>
        </ui>
      </section>
        <Table striped>
        <thead>
          <tr>
            <th>Código</th>
            <th>Nombre</th>
            <th>Rol</th>
            <th>Estado</th>
            <th>Actualizar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">0001</th>
            <td>Juan Sebastian Ruiz Acero</td>
            <td>Administrador</td>
            <td>Activo</td>
            <th><Link to='/actualizarfuncionario'><Button color="primary">Actualizar funcionario</Button></Link></th>
            <th><Button color="danger">Eliminar funcionario</Button></th>
            
          </tr>
          <tr>
            <th scope="row">0002</th>
            <td>Alexander Ortiz</td>
            <td>Vendedor</td>
            <td>Activo</td>
            <th><Link to='/actualizarfuncionario'><Button color="primary">Actualizar funcionario</Button></Link></th>
            <th><Button color="danger">Eliminar funcionario</Button></th>
            
          </tr>
          <tr>
          <th scope="row">0003</th>
            <td>Pedro Mesa</td>
            <td>Vendedor</td>
            <td>Activo</td>
            <th><Link to='/actualizarfuncionario'><Button color="primary">Actualizar funcionario</Button></Link></th>
            <th><Button color="danger">Eliminar funcionario</Button></th>
          </tr>

          <tr>
            <th scope="row">0004</th>
            <td>Diego Vidales</td>
            <td>Vendedor</td>
            <td>Activo</td>
            <th><Link to='/actualizarfuncionario'><Button color="primary">Actualizar funcionario</Button></Link></th>
            <th><Button color="danger">Eliminar funcionario</Button></th>
            
          </tr>

          <tr>
            <th scope="row">0002</th>
            <td>Jimy Sierra</td>
            <td>Vendedor</td>
            <td>Inactivo</td>
            <th><Link to='/actualizarfuncionario'><Button color="primary">Actualizar funcionario</Button></Link></th>
            <th><Button color="danger">Eliminar funcionario</Button></th>
            
          </tr>

        </tbody>
      </Table>
      <section style={{ display: "flex", width: "100%", justifyContent: "flex-end" }} >
      <Pagination aria-label="Page navigation example">
    <PaginationItem>
        <PaginationLink first href="#" />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink previous href="#" />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">
          1
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">
          2
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">
          3
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">
          4
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">
          5
        </PaginationLink>
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
    )
}

export default ListaRolesTabla
