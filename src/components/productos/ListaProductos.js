import React from "react";
import { ListGroup, Button } from "react-bootstrap";
import ItemProducto from "./ItemProducto";
const ListaProductos = (props) => {
  return (
    <>
      <div className="container">
          <h1 className='text-center my-5'>Lista Productos</h1>
          <hr />
          <section className='d-flex justify-content-end align-items-center my-5'>
            <h5 className='mx-3'>Agregar nuevos productos:</h5>
            <Button>Agregar</Button>
          </section>
        <section>
          <ListGroup>{
            props.productos.map((producto)=><ItemProducto key={producto.id} producto={producto}></ItemProducto>)
            }
            
          </ListGroup>
        </section>
      </div>
    </>
  );
};

export default ListaProductos;
