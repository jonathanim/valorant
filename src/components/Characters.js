import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CharacterCard from "./CharacterCard";
import axios from "axios";
import Loading from "./Loading";
const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacters = async () => {
      const result = await axios.get("https://valorant-api.com/v1/agents");
      setCharacters(result.data.data);
      setLoading(false);
    };
    fetchCharacters();
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-center text-4xl my-5">
        {" "}
        {loading ? <Loading /> : "Characters"}
      </h1>
      <div className="grid grid-cols-2 gap-5  md:grid-cols-4">
        {characters
          .filter((char) => char.isPlayableCharacter === true)
          .sort(
            (a, b) =>
              (a.background === null) - (b.background === null) ||
              -(a > b) ||
              +(a < b)
          )
          .map((character) => {
            return (
              <Link key={character.uuid} to={`/characters/${character.uuid}`}>
                <CharacterCard character={character} />
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default Characters;
