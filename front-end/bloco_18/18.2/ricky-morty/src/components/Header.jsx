import React from 'react';
import { Button, Form, FormControl, Navbar } from 'react-bootstrap';

function Header({ setInputName, inputName }) {
  return (
    <header>
      <div className="header-title">
        <h1>Rick and Morty</h1>
      </div>
      <Navbar className="justify-content-center">
        <Form inline>
          <FormControl
            type="text"
            placeholder="pesquisar..."
            className=" mr-sm-2"
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
          />
          <Button type="button" variant="outline-secondary">
            Procurar
          </Button>
        </Form>
      </Navbar>
    </header>
  );
}

export default Header;
