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
              <CharacterCard
                // gender={char.gender}
                // image={char.image}
                // name={char.name}
                character={character}
              />
            </Col>
          );
        })}
    </>
  );
}

export default CardGrid;
