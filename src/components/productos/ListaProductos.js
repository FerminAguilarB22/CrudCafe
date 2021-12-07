import React from "react";
import { ListGroup } from "react-bootstrap";
import ItemProducto from "./ItemProducto";
import { Link } from "react-router-dom";
const ListaProductos = (props) => {
  return (
    <>
      <div className="container">
          <h1 className='text-center my-5'>Lista Productos</h1>
          <hr />
          <section className='d-flex justify-content-end align-items-center my-5'>
            <h5 className='mx-3'>Agregar nuevos productos:</h5>
            <Link to='/productos/nuevo' className='btn btn-primary'>Agregar</Link>
          </section>
        <section>
          <ListGroup>{
            props.productos.map((producto)=><ItemProducto key={producto.id} producto={producto} consultarAPI={props.consultarAPI}></ItemProducto>)
            }
            
          </ListGroup>
        </section>
      </div>
    </>
  );
};

export default ListaProductos;
