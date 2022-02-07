import { Routes, Route } from 'react-router-dom';

import Home from '../pages/home/Home';
import About from '../pages/about/About';
import Configuration from '../pages/configuration/Configuration';
import Instruction from '../pages/instruction/Instruction';

export default function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="configuration" element={<Configuration />} />
      <Route path="instruction" element={<Instruction />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}
