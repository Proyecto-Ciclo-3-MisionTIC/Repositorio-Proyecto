import React, {useState, useEffect} from 'react'
import { Table } from 'reactstrap';
import { Button} from "reactstrap";
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { Link } from 'react-router-dom';

function ListaRolesTabla2() {
  const [users, setUsers] = useState([]);  
  const getUsers = async ()=>{
      try{
          const response  = await fetch("http://localhost:3001/get-user")
          ;
          const jsonResponse = await response.json();
          const responseUsers = jsonResponse.data;
          const listUsers = responseUsers.map((user)=>
              <tr>
                  <th scope="row">{user.Codigo}</th>
                  <td>{user.Nombre}</td>
                  <td>{user.Rol}</td>
                  <td>{user.Estado}</td>
                  <th><Link to='/actualizarfuncionario'><Button color="primary">Actualizar funcionario</Button></Link></th>
                  <th><Button color="danger">Eliminar funcionario</Button></th>     
              </tr>                   
          );
          setUsers(listUsers);
          console.log(jsonResponse);
      }
      catch(error){            
          console.log(error);
      }

  }
  useEffect(()=>{
      getUsers();
  },[]);
  return (
      <div className="container">
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
          <table class="table">
              <thead>
                  <tr>
                      <th scope="col">Codigo</th>
                      <th scope="col">Nombre</th>
                      <th scope="col">Rol</th>
                      <th scope="col">Estado</th>
                      <th>Actualizar</th>
                      <th>Eliminar</th>
                  </tr>
              </thead>
              <tbody>
                  {users}
              </tbody>
          </table>
      </div>
  )
}


export default ListaRolesTabla2
