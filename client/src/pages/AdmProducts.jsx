import React, { useEffect, useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { nanoid } from 'nanoid';
import { Dialog, Tooltip } from '@material-ui/core';
//import { obtenerProductos } from "/utils/api";
import 'react-toastify/dist/ReactToastify.css';
import { Button} from "reactstrap";

const Productos = () => {
  const [mostrarTabla, setMostrarTabla] = useState(true);
  const [productos, setProductos] = useState([]);
  const [textoBoton, setTextoBoton] = useState('Crear nuevo producto');
  const [ejecutarConsulta, setEjecutarConsulta] = useState(true);

  const obtenerProductos = async (setVehiculos, setEjecutarConsulta) => {
    const options = { method: 'GET', url: 'https://vast-waters-45728.herokuapp.com/vehicle/' };
    await axios
      .request(options)
      .then(function (response) {
        setVehiculos(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
    setEjecutarConsulta(false);
  };

  useEffect(() => {
    console.log('consulta', ejecutarConsulta);
    if (ejecutarConsulta) {
      obtenerProductos(setProductos, setEjecutarConsulta);
    }
  }, [ejecutarConsulta]);

  useEffect(() => {
    //obtener lista de productos desde el backend
    if (mostrarTabla) {
      setEjecutarConsulta(true);
    }
  }, [mostrarTabla]);

  useEffect(() => {
    if (mostrarTabla) {
      setTextoBoton('Crear nuevo producto');
    } else {
      setTextoBoton('Mostrar todos los productos');
    }
  }, [mostrarTabla]);
  return (
    <div>
      <div className='flex flex-col w-full'>
        <h2>
          Página de administración de productos
        </h2>
        <Button onClick={() => {
            setMostrarTabla(!mostrarTabla);
          }} color="primary" size="lg">{textoBoton}</Button>
      </div>
      {mostrarTabla ? (
        <TablaProductos listaVehiculos={productos} setEjecutarConsulta={setEjecutarConsulta} />
      ) : (
        <FormularioCreacionProductos
          setMostrarTabla={setMostrarTabla}
          listaProductos={productos}
          setProductos={setProductos}
        />
      )}
      <ToastContainer position='bottom-center' autoClose={5000} />
    </div>
  );
};

const TablaProductos = ({ listaProductos, setEjecutarConsulta }) => {
  const [busqueda, setBusqueda] = useState('');
  const [productosFiltrados, setProductosFiltrados] = useState(listaProductos);

  useEffect(() => {
    setProductosFiltrados(
      listaProductos.filter((elemento) => {
        return JSON.stringify(elemento).toLowerCase().includes(busqueda.toLowerCase());
      })
    );
  }, [busqueda, listaProductos]);

  return (
    <div className='flex flex-col items-center justify-center w-full'>
      <input
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        placeholder='Buscar'
        className='border-2 border-gray-700 px-3 py-1 self-start rounded-md focus:outline-none focus:border-indigo-500'
      />
      <h2 className='text-2xl font-extrabold text-gray-800'>Todos los vehículos</h2>
      <div>
        <table className='tabla'>
          <thead>
            <tr>
              <th>Nombre del producto</th>
              <th>Estado del producto </th>
              <th>Precio del vehículo</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {productosFiltrados.map((producto) => {
              return (
                <FilaVehiculo
                  key={nanoid()}
                  vehiculo={producto}
                  setEjecutarConsulta={setEjecutarConsulta}
                />
              );
            })}
          </tbody>
        </table>
      </div>
      <div>
        {productosFiltrados.map((el) => {
          return (
            <div >
              <span>{el.name}</span>
              <span>{el.brand}</span>
              <span>{el.model}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const FilaVehiculo = ({ producto, setEjecutarConsulta }) => {
  const [edit, setEdit] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [infoNuevoProducto, setInfoNuevoProducto] = useState({
    name: producto.name,
    brand: producto.brand,
    model: producto.model,
  });

  const actualizarProducto = async () => {
    //enviar la info al backend
    const options = {
      method: 'PATCH',
      url: 'https://vast-waters-45728.herokuapp.com/vehicle/update/',
      headers: { 'Content-Type': 'application/json' },
      data: { ...infoNuevoProducto, id: producto._id },
    };

    await axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        toast.success('Producto modificado con éxito');
        setEdit(false);
        setEjecutarConsulta(true);
      })
      .catch(function (error) {
        toast.error('Error modificando el producto');
        console.error(error);
      });
  };

  const eliminarProducto = async () => {
    const options = {
      method: 'DELETE',
      url: 'https://vast-waters-45728.herokuapp.com/vehicle/delete/',
      headers: { 'Content-Type': 'application/json' },
      data: { id: producto._id },
    };

    await axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        toast.success('Producto eliminado con éxito');
        setEjecutarConsulta(true);
      })
      .catch(function (error) {
        console.error(error);
        toast.error('Error eliminando el producto');
      });
    setOpenDialog(false);
  };

  return (
    <tr>
      {edit ? (
        <>
          <td>
            <input
              type='text'
              value={infoNuevoProducto.name}
              onChange={(e) => setInfoNuevoProducto({ ...infoNuevoProducto, name: e.target.value })}
            />
          </td>
          <td>
            <input
              type='text'
              value={infoNuevoProducto.brand}
              onChange={(e) =>
                setInfoNuevoProducto({ ...infoNuevoProducto, brand: e.target.value })
              }
            />
          </td>
          <td>
            <input
              className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
              type='number'
              value={infoNuevoProducto.model}
              onChange={(e) =>
                setInfoNuevoProducto({ ...infoNuevoProducto, model: e.target.value })
              }
            />
          </td>
        </>
      ) : (
        <>
          <td>{producto.name}</td>
          <td>{producto.brand}</td>
          <td>{producto.model}</td>
        </>
      )}
      <td>
        <div>
          {edit ? (
            <>
              <Tooltip title='Confirmar Edición' arrow>
                <i
                  onClick={() => actualizarProducto()}
                  className='fas fa-check'
                />
              </Tooltip>
              <Tooltip title='Cancelar edición' arrow>
                <i
                  onClick={() => setEdit(!edit)}
                  className='fas fa-ban'
                />
              </Tooltip>
            </>
          ) : (
            <>
              <Tooltip title='Editar producto' arrow>
                <i
                  onClick={() => setEdit(!edit)}
                  className='fas fa-pencil-alt'
                />
              </Tooltip>
              <Tooltip title='Eliminar producto' arrow>
                <i
                  onClick={() => setOpenDialog(true)}
                  className='fas fa-trash'
                />
              </Tooltip>
            </>
          )}
        </div>
        <Dialog open={openDialog}>
          <div>
            <h1>
              ¿Está seguro de querer eliminar el producto?
            </h1>
            <div>
              <button
                onClick={() => eliminarProducto()}
              >
                Sí
              </button>
              <button
                onClick={() => setOpenDialog(false)}
              >
                No
              </button>
            </div>
          </div>
        </Dialog>
      </td>
    </tr>
  );
};

const FormularioCreacionProductos = ({ setMostrarTabla, listaProductos, setProductos }) => {
  const form = useRef(null);

  const submitForm = async (e) => {
    e.preventDefault();
    const fd = new FormData(form.current);

    const nuevoProducto = {};
    fd.forEach((value, key) => {
      nuevoProducto[key] = value;
    });

    const options = {
      method: 'POST',
      url: 'https://vast-waters-45728.herokuapp.com/vehicle/create',
      headers: { 'Content-Type': 'application/json' },
      data: { name: nuevoProducto.name, brand: nuevoProducto.brand, model: nuevoProducto.model },
    };

    await axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        toast.success('Producto agregado con éxito');
      })
      .catch(function (error) {
        console.error(error);
        toast.error('Error creando un producto');
      });

    setMostrarTabla(true);
  };

  return (
    <div>
      <h2>Crear nuevo producto</h2>
      <form ref={form} onSubmit={submitForm} className='flex flex-col'>
        <label  htmlFor='nombre'>
          Nombre del producto
          <input
            name='name'
            type='text'
            placeholder='Pantalla LG'
            required
          />
        </label>
        <label htmlFor='marca'>
          Estado del producto
          <select
            name='brand'
            required
            defaultValue={0}
          >
            <option disabled value={0}>
              Seleccione una opción
            </option>
            <option>Disponible</option>
            <option>No disponibel</option>
          </select>
        </label>
        <label  htmlFor='modelo'>
          Precio del producto
          <input
            name='model'
            type='number'
            placeholder='1000'
            required
          />
        </label>

        <button
          type='submit'
        >
          Guardar producto
        </button>
      </form>
    </div>
  );
};

export default Productos;