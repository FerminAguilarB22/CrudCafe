import React, { useEffect, useState } from 'react';
import { Form,Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
const EditarProducto = () => {
const {id} = useParams();
const [producto, setProducto] = useState({});
const URL = process.env.REACT_APP_API_URL + "/" + id;

useEffect(async()=>{
  // constular un solo elemnto a la api
  try{
    const respuesta = await fetch(URL);
    if (respuesta.status === 200){
      const dato = await respuesta.json();
      setProducto(dato);
    }

  }catch(error){
    // mostrar mensaje de error
  }

},[]);


    return (
        <div className="container">
        <section>
          <h1 className="display-3 my-4 text-center">Editar Producto</h1>
          <hr />
        </section>
        <section className="my-3">
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Nombre del producto*</Form.Label>
              <Form.Control type="text" placeholder="Ej: Café" />
            </Form.Group>
  
            <Form.Group className="mb-3">
              <Form.Label>Precio*</Form.Label>
              <Form.Control type="text" placeholder="Ej: 50" />
            </Form.Group>
            <Form.Group className='mb-3'>
            <Form.Label>Categoria*</Form.Label>
            <Form.Select aria-label="Default select example" >
              <option>Seleccione una opcion</option>
              <option value="1">Opcion 1</option>
              <option value="2">Opcion 2</option>
              <option value="3">Opcion 3</option>
            </Form.Select>
            </Form.Group>
            <Button variant="primary" type="submit" className='w-100'>
              Guardar
            </Button>
          </Form>
        </section>
      </div>
    );
};

export default EditarProducto;