import { Routes, Route } from 'react-router-dom';

import Home from '../pages/home/Home';
import About from '../pages/about/About';

export default function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}
