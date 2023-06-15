import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import LandingPage from './pages/LandingPage';
import EventPage from './pages/EventPage';
import WisataPage from './pages/WisataPage';
import TentangPage from './pages/TentangPage';
import MitraPage from './pages/MitraPage';
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/event" element={<EventPage/>} />
      <Route path="/wisata" element={<WisataPage/>} />
      <Route path="/tentang" element={<TentangPage/>}/>
      <Route path="/mitra" element={<MitraPage/>}/>
    </Routes>
  );
}

export default App;
