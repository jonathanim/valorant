import React from "react";

const MapCard = ({ mapInfo }) => {
  console.log(mapInfo);
  return (
    <div className="card grid">
      <img src={mapInfo.splash} alt={mapInfo.displayName} />
      <h1 className="text-center text-2xl mt-3 font-extrabold">
        {mapInfo.displayName}
      </h1>
      <div className="flex items-center justify-center flex-col">
        <h2>Real World Coordinates:</h2>
        <h3>{mapInfo.coordinates}</h3>
      </div>
    </div>
  );
};

export default MapCard;
