import React, { useState } from "react";
import { useEffect } from "react";
import { Row } from "react-bootstrap";
import CardGrid from "../components/CardGrid";

function Characters() {
  const [characters, setCharacters] = useState(null);

  const fetchCharacters = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();

    const charactersList = data.results;

    setCharacters(charactersList);
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <div>
      <Row>
        <CardGrid characters={characters} />
      </Row>
    </div>
  );
}

export default Characters;
