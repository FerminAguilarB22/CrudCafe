import React, { useEffect, useRef, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { campoRequerido, rangoPrecio } from "../helpers/helpers";

const EditarProducto = (props) => {
  const { id } = useParams();
  const [producto, setProducto] = useState({});
  const [categoria, setCategoria] = useState("");
  const URL = process.env.REACT_APP_API_URL + "/" + id;
  // crear variables de referencia

  const nombreProductoRef = useRef('');
  const precioProductoRef = useRef(0); 
  useEffect(async () => {
    // constular un solo elemnto a la api
    try {
      const respuesta = await fetch(URL);
      if (respuesta.status === 200) {
        const dato = await respuesta.json();
        setProducto(dato);
        setCategoria(dato.categoria);
      }
    } catch (error) {
      // mostrar mensaje de error
      console.log(error);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // validar los datos
    if (campoRequerido(nombreProductoRef.current.value)&&campoRequerido(categoria)&&rangoPrecio(precioProductoRef.current.value)){
      console.log('todo ok pa');
      // crear un objeto y enviarlo a la api
      const productoModificado = {
        nombreProducto : nombreProductoRef.current.value,
        precioProducto : precioProductoRef.current.value,
        categoria : categoria
      }
      // pedir modificar datos a la API, peticion PUT
      try{
        const respuesta = await fetch (URL, {
          method: 'PUT',
          headers:{'Content-Type':'application/json' },
          body: JSON.stringify(productoModificado)
        })
        
        if(respuesta.status===200){
          Swal.fire(
            'Producto modificado',
            'El producto de correctamente actualizado',
            'success'
          )
          props.consultarAPI();
        }
      }catch(error){
        console.log(error); 
        // mostrar mensaje al usuario

      }


    }else{
      console.log("datos invalidos");
      // mostrar mensaje de error

    }

    
  }

  return (
    <div className="container">
      <section>
        <h1 className="display-3 my-4 text-center">Editar Producto</h1>
        <hr />
      </section>
      <section className="my-3">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Nombre del producto*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: Café"
              defaultValue={producto.nombreProducto}
              ref={nombreProductoRef}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Precio*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: 50"
              defaultValue={producto.precioProducto}
              ref={precioProductoRef}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Categoria*</Form.Label>
            <Form.Select
              value={categoria}
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
      </section>
    </div>
  );
};

export default EditarProducto;
