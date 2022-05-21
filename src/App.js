import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import Characters from "./components/Characters";
import Maps from "./components/Maps";
import Weapons from "./components/Weapons";
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="container mx-auto">
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/maps" element={<Maps />} />
        <Route path="/weapons" element={<Weapons />} />
      </Routes>
    </div >
  );
}

export default App;
