import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Homepage from './pages/Homepage';
import LandingPage from './pages/LandingPage';
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/landingpage" element={<LandingPage />} />
    </Routes>
  );
}

export default App;
