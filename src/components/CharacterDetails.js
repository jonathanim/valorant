import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import YouTube from "react-youtube";
import Loading from "./Loading";

const videos = {
  Breach: "Rux0HjzKQbw",
  Raze: "2-uAL__pp_U",
  Chamber: "LVoF64LOgL0",
  "KAY/O": "r0n4AYekCaA",
  Skye: "C3QTyMXi-WE",
  Cypher: "SgbqFtRRgLA",
  Sova: "OZ76UP-c8Ao",
  Killjoy: "ua-iIRQDY8g",
  Viper: "9dOSy0EhLfQ",
  Phoenix: "ttJMFW2wUQM",
  Astra: "-ylVnuPWlJM",
  Brimstone: "7yHnJ_oNxTI",
  Yoru: "GdOEQv-zQVw",
  Sage: "1aRwM_QsqQI",
  Reyna: "IzsQNYrq9AM",
  Omen: "_jJdWy6bDj4",
  Jett: "-cPLXswVsvc",
  Fade: "UMzKD73cs3c",
  Neon: "dtx8CgjRmqE",
};

const CharacterDetails = () => {
  const [character, setCharacter] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [video, setVideo] = useState("");

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 0,
    },
  };

  const onReadyP = (event) => {
    event.target.pauseVideo();
  };

  const fetchCharacter = async () => {
    const characterInfo = await axios.get(
      `https://valorant-api.com/v1/agents/${id}`
    );

    setCharacter(characterInfo.data.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchCharacter();
    setVideo(videos[character.displayName]);
  }, [character]);

  if (loading) {
    return (
      <h1>
        <Loading />
      </h1>
    );
  } else {
    return (
      <div className="container mx-auto text-center justify-center items-center">
        <h1 className="text-4xl m-5">{character.displayName}</h1>
        <div className="container mx-auto grid justify-center items-center">
          <div className="justify-center items-center">
            <YouTube
              videoId={video}
              opts={opts}
              onReady={(e) => () => onReadyP}
              className="border-4 p-3 bg-black block"
            />
          </div>
          <h2 className="text-3xl my-4">Skills</h2>
          <div className="block sm:flex">
            {character.abilities.map((skill, i) => {
              return (
                <div
                  key={i}
                  className="mb-3 p-2 bg-orange-300 text-black items-center"
                >
                  <img
                    src={skill.displayIcon}
                    alt={skill.displayName}
                    style={{
                      width: "100px",
                      height: "100px",
                      margin: "auto",
                      objectFit: "scale-down",
                    }}
                  />
                  <h3 className="text-3xl">{skill.displayName}</h3>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-10 p-5">
          <h2 className="text-3xl w-64 text-center mb-2">Summary</h2>
          <p className="w-2/4 text-center">{character.description}</p>
        </div>
      </div>
    );
  }
};

export default CharacterDetails;
