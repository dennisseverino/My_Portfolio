import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Produce from './pages/Produce';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/produce" element={<Produce />} />
    </Routes>
  );
}

export default App;