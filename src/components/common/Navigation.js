import React from "react";
import { Nav } from "react-bootstrap";

const Navigation = () => {
  return (
    <>
      <Nav
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        className='bg-danger py-3 d-flex align-items-center'
      >
        <Nav.Item>
          <Nav.Link href="/home" className='mx-2 text-white fs-4'>CRUD Basico</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" className=' text-white'>Inicio</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" className=' text-white'>Productos</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3" className=' text-white'>
            Nuevo producto
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
};

export default Navigation;
