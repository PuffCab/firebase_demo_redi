import React from "react";
import { Button, Card } from "react-bootstrap";

function CharacterCard({ character }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={character.image} />
      <Card.Body>
        <Card.Title>{character.name}</Card.Title>

        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CharacterCard;
