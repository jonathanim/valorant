import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import Characters from "./components/Characters";
import Maps from "./components/Maps";
import Weapons from "./components/Weapons";
import { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom'
import axios from "axios";
import CharacterDetails from "./components/CharacterDetails";

function App() {

  const [characters, setCharacters] = useState([])
  const [maps, setMaps] = useState([])
  const [weapons, setWeapons] = useState([])


  useEffect(() => {
    fetchCharacters()
    fetchMaps()
    fetchWeapons()
  }, [])

  const fetchCharacters = async () => {
    const result = await axios.get('https://valorant-api.com/v1/agents')
    setCharacters(result.data)
  }
  const fetchMaps = async () => {
    const result = await axios.get('https://valorant-api.com/v1/maps')
    setMaps(result.data)
  }
  const fetchWeapons = async () => {
    const result = await axios.get('https://valorant-api.com/v1/weapons')
    setWeapons(result.data)
  }


  return (
    <div className="container mx-auto">
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/characters" element={<Characters characters={characters} />} />
        <Route path="/characters/:id" element={<CharacterDetails />} />
        <Route path="/maps" element={<Maps maps={maps} />} />
        <Route path="/weapons" element={<Weapons weapons={weapons} />} />
      </Routes>
    </div >
  );
}

export default App;
