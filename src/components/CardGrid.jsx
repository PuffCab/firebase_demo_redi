import React from "react";
import { Col } from "react-bootstrap";
import CharacterCard from "./CharacterCard";

function CardGrid({ characters }) {
  return (
    <>
      {characters &&
        characters.map((character) => {
          return (
            <Col key={character.id}>
              <CharacterCard character={character} />
            </Col>
          );
        })}
    </>
  );
}

export default CardGrid;
