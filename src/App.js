import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import LandingPage from './pages/LandingPage';
import EventPage from './pages/EventPage';
import WisataPage from './pages/WisataPage';
import TentangPage from './pages/TentangPage';
import MitraPage from './pages/MitraPage';
import Pantai from './pages/Pantai';
import Sejarah from './pages/Sejarah';
import Kuliner from './pages/Kuliner';
import Gunung from './pages/Gunung';
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/event" element={<EventPage/>} />
      <Route path="/wisata" element={<WisataPage/>} />
      <Route path="/tentang" element={<TentangPage/>}/>
      <Route path="/mitra" element={<MitraPage/>}/>
      <Route path="/pantai" element={<Pantai/>}/>
      <Route path="/sejarah" element={<Sejarah/>}/>
      <Route path="/kuliner" element={<Kuliner/>}/>
      <Route path="/gunung" element={<Gunung/>}/>
    </Routes>
  );
}

export default App;
