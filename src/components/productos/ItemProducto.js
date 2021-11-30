import React from "react";
import { ListGroup, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { Link } from "react-router-dom"; 

const ItemProducto = (props) => {


  const eliminarProducto = () => {
    Swal.fire({
      title: "¿Esta seguro que quiere eliminar este producto?",
      text: "Si elimina no se podra recuperar los datos",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
    }).then(async(result) => {
      if (result.isConfirmed) {
        // pedir a la api borrar un producto
        try {
          const URL = process.env.REACT_APP_API_URL + "/" + props.producto.id;

          const respuesta = await fetch(URL,{
            method: "DELETE",
            headers:{
              "Content-Type":"application/json"
            }
          });
          console.log(respuesta);
          // si la api borro el producto, muestro el msj
          if(respuesta.status === 200){
            Swal.fire(
              "Producto eliminado",
              "El producto fue correctamente eliminado",
              "success"
            );
            //llamar a  consultarAPI
            props.consultarAPI();
          }
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

  return (
    <>
      <ListGroup.Item className="d-flex justify-content-between">
        <p>
          {props.producto.nombreProducto}{" "}
          <span className="fw-bolder">
            -Precio: ${props.producto.precioProducto}
          </span>
        </p>
        <div>
          <Link to={"/productos/editar/" + props.producto.id}   className="me-2 btn btn-warning">
            Editar
          </Link>
          <Button variant="danger" onClick={() => eliminarProducto()}>
            Borrar
          </Button>
        </div>
      </ListGroup.Item>
    </>
  );
};

export default ItemProducto;
