import React from "react";
import { ListGroup, Button } from "react-bootstrap";
import ItemProducto from "./ItemProducto";
const ListaProductos = () => {
  return (
    <>
      <div className="container">
          <h1 className='text-center my-5'>Lista Productos</h1>
          <hr />
          <section className='d-flex justify-content-end align-items-center my-5'>
            <h5 className='mx-3'>Agregar nuevos productos:</h5>
            <Button>(+)</Button>
          </section>
        <section>
          <ListGroup>
            <ItemProducto></ItemProducto>
          </ListGroup>
        </section>
      </div>
    </>
  );
};

export default ListaProductos;
