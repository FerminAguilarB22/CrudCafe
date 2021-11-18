import React from "react";
import { ListGroup, Button } from "react-bootstrap";
const ItemProducto = () => {
  return (
    <>
      <ListGroup.Item className="d-flex justify-content-between">
        Cras justo odio
        <div>
         <Button variant="warning" className='me-2'>Editar</Button>
        <Button variant="danger">Borrar</Button>
        </div>
      </ListGroup.Item>
    </>
  );
};

export default ItemProducto;
