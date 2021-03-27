import React from 'react';
import { Badge, Button, Form, FormControl, Navbar } from 'react-bootstrap';

function Header() {
  return (
    <>
      <div className="header-title">
        <h1>Rick and Morty</h1>
      </div>
      <Navbar className="justify-content-center">
        <Form inline>
          <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
          <Button type="button" variant="outline-secondary">
            Procurar
          </Button>
        </Form>
      </Navbar>
    </>
  );
}

export default Header;
