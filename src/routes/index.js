import { Routes, Route } from 'react-router-dom';

import Home from '../pages/home/Home';

export default function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="home" element={<Home />} />
    </Routes>
  );
}
