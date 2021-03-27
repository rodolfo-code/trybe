import React from 'react';
import './characterCard.css';

import { Button, Card } from 'react-bootstrap';

function CharacterCard({ name, image }) {
  return (
    <Card className="card">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CharacterCard;
