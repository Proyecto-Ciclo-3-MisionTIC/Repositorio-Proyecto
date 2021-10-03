import React from 'react'
import { Table } from 'reactstrap';
import { Button} from "reactstrap";
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { Link } from 'react-router-dom';

const ListaProductosTabla = () => {
    return (
      <div>
        <section > 
          <Link to='/agregarproductos'>
          <Button color="primary" size="lg">Adicionar producto</Button></Link>{' '}
          <Link to='/buscarproductos'><Button color="secondary" size="lg">Buscar producto</Button></Link>
        </section>
        <Table striped>
        <thead>
          <tr>
            <th>Código</th>
            <th>Descripción</th>
            <th>Valor Unitario</th>
            <th>Estado</th>
            <th>Actualizar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">0001</th>
            <td>Pantalla LG 15"</td>
            <td>300000</td>
            <td>Disponible</td>
            <th><Link to= '/actualizarproducto'><Button color="primary">Actualizar producto</Button></Link></th>
            <th><Button color="danger">Eliminar producto</Button></th>
            
          </tr>
          <tr>
            <th scope="row">0002</th>
            <td>Pantalla Acer 15"</td>
            <td>200000</td>
            <td>No disponible</td>
            <th><Link to= '/actualizarproducto'><Button color="primary">Actualizar producto</Button></Link></th>
            <th><Button color="danger">Eliminar producto</Button></th>
            
          </tr>
          <tr>
            <th scope="row">0003</th>
            <td>Pantalla Samsung 15"</td>
            <td>350000</td>
            <td>Disponible</td>
            <th><Link to= '/actualizarproducto'><Button color="primary">Actualizar producto</Button></Link></th>
            <th><Button color="danger">Eliminar producto</Button></th>
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

export default ListaProductosTabla
