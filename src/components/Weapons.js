import React, { useState, useEffect } from "react";
import WeaponsCard from "./WeaponsCard";
import axios from "axios";
import Loading from "./Loading";

const Weapons = () => {
  const [weapons, setWeapons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchWeapons();
  }, []);

  const fetchWeapons = async () => {
    const result = await axios.get("https://valorant-api.com/v1/weapons");
    setWeapons(result.data.data);
    setLoading(false);
  };

  return (
    <div className="cointainer mx-auto items-center just">
      <h1 className="text-center text-4xl my-5">
        {loading ? <Loading /> : "All Weapons"}
      </h1>
      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {weapons.map((weapon, i) => {
          return (
            <WeaponsCard key={i} weapon={weapon}>
              {weapon.displayName}
            </WeaponsCard>
          );
        })}
      </div>
    </div>
  );
};

export default Weapons;
