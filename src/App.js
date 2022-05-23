import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import Characters from "./components/Characters";
import AllMaps from "./components/AllMaps";
import Weapons from "./components/Weapons";
import { Routes, Route } from "react-router-dom";

import CharacterDetails from "./components/CharacterDetails";

function App() {
  return (
    <div className="w-full container mx-auto">
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/characters/:id" element={<CharacterDetails />} />
        <Route path="/maps" element={<AllMaps />} />
        <Route path="/weapons" element={<Weapons />} />
      </Routes>
    </div>
  );
}

export default App;
