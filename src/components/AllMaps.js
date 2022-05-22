import { useState, useEffect } from "react";
import MapCard from "./MapCard";
import axios from "axios";
import Loading from "./Loading";
const AllMaps = () => {
  const [maps, setMaps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMaps = async () => {
      const result = await axios.get("https://valorant-api.com/v1/maps");
      setMaps(result.data.data);
      setLoading(false);
    };
    fetchMaps();
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-center text-4xl my-5">
        {" "}
        {loading ? <Loading /> : "All Maps"}
      </h1>
      <div className="grid grid-cols-2 gap-5">
        {maps.map((m, index) => {
          return (
            <div className="grid" key={index}>
              <MapCard mapInfo={m} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllMaps;
