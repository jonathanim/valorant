import React from "react";

const CharacterCard = ({ character }) => {
  return (
    <div>
      <div className="card border-2 p-5 m-3">
        <div
          className="image-ctn rounded"
          style={{
            backgroundImage: `url(${character.background})`,
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundColor: "#fa4454",
          }}
        >
          <img src={character.fullPortrait} alt={character.displayName} />
        </div>

        <h2 className="text-center p-2 text-2xl font-bold tracking-wide">
          {character.displayName}
        </h2>
        <div className={`role`}>
          <p className="text-center p-2 text-xl">
            {character.role.displayName}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
