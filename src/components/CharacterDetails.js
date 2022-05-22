import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const CharacterDetails = () => {
  const [character, setCharacter] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    fetchCharacters();
  });

  const fetchCharacters = async () => {
    const characterInfo = await axios.get(
      `https://valorant-api.com/v1/agents/${id}`
    );
    setLoading(false);
    setCharacter(characterInfo.data.data);
  };

  if (loading) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div className="container mx-auto">
        <div className="header">
          <h1>{character.displayName}</h1>
        </div>
        <p>{character.description}</p>
        {JSON.stringify(character)}
      </div>
    );
  }
};

export default CharacterDetails;
