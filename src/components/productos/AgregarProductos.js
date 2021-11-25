import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { campoRequerido, rangoPrecio } from "../helpers/helpers";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AgregarProductos = (props) => {
  const [nombreProducto, setNombreProducto] = useState("");
  const [precioProducto, setPrecioProducto] = useState(0);
  const [categoria, setCategoria] = useState("");
  const [alert, setAlert] = useState(false);
  const URL = process.env.REACT_APP_API_URL;
  const navegacion = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // validar todos los inputs
    if (
      campoRequerido(nombreProducto) &&
      rangoPrecio(precioProducto) &&
      campoRequerido(categoria)
    ) {
      setAlert(false);
      // crear un objeto
      const productoNuevo = {
        nombreProducto: nombreProducto,
        precioProducto: precioProducto,
        categoria: categoria,
      };
      // enviar el objeto producto a la api POST
      try {
        const parametros = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(productoNuevo),
        };
        const respuesta = await fetch(URL, parametros); //primer valor el link de la api y segundo valor es un objeto con la sintaxis de arriba (parametros)
        console.log(respuesta);
        if (respuesta.status === 201) {
          // mostrar al usuario un cartel de operacion exitosa
          Swal.fire(
            "Producto creado",
            "El producro fue cargado correctamente",
            "success"
          );
          // resetear formulario
          e.target.reset();
          // consultar los datos de la API
          props.consultarAPI();
          // redireccionar a la lista de productos
          navegacion("/productos");
        } else {
          // mostrar cartel de error
          Swal.fire("Hubo un error", "Intente nuevamente mas tarde", "error");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      // si falla la validacion de los input, mostrar un mensaje al usuario
      setAlert(true);
    }
  };

  return (
    <div className="container">
      <section>
        <h1 className="display-3 my-4 text-center">Nuevo Producto</h1>
        <hr />
      </section>
      <section className="my-3">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Nombre del producto*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: Café"
              onChange={(e) => setNombreProducto(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Precio*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: 50"
              onChange={(e) => setPrecioProducto(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Categoria*</Form.Label>
            <Form.Select
              aria-label="Default select example"
              onChange={(e) => setCategoria(e.target.value)}
            >
              <option value="">Seleccione una opcion</option>
              <option value="bebida-caliente">Bebida Caliente</option>
              <option value="bebida-fria">Bebida Fria</option>
              <option value="sandwich">Sandwich</option>
              <option value="dulce">Dulce</option>
              <option value="salado">Salado</option>
            </Form.Select>
          </Form.Group>
          <Button variant="primary" type="submit" className="w-100">
            Guardar
          </Button>
        </Form>
        {alert === true ? (
          <Alert variant="danger" className="my-4 ">
            Debe completar todos los campos,recuerde que el precio del producto
            debe ser menor a $5000.
          </Alert>
        ) : null}
      </section>
    </div>
  );
};

export default AgregarProductos;
