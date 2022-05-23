import React from "react";

const WeaponsCard = ({ weapon }) => {
  const newStr = (str) => {
    const arr = str.split(":");
    return arr[2];
  };

  console.log(weapon);
  return (
    <div className="card grid text-center duration-1000 ease-in-out hover:scale-150 border-2">
      <div>
        <img
          src={weapon.displayIcon}
          alt={weapon.displayName}
          style={{
            width: "100px",
            height: "100px",
            margin: "auto",
            objectFit: "scale-down",
          }}
        />
      </div>
      <div>
        <h2>{weapon.displayName}</h2>
      </div>
      <h3>{newStr(weapon.category)}</h3>
      <h2>
        Cost:{" "}
        {weapon.shopData !== null ? (
          <h1>{weapon.shopData.cost}</h1>
        ) : (
          "Included"
        )}
      </h2>
    </div>
  );
};

export default WeaponsCard;
