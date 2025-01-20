import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './assets/components/Navbar';
import Home from './assets/pages/Home';
import Research from './assets/pages/Research';
import Teaching from './assets/pages/Teaching';
import Econ2110 from './assets/pages/courses/Econ2110';
import Econ303 from './assets/pages/courses/Econ303';
import Econ321 from './assets/pages/courses/Econ321';
import OnlineEcon2110 from './assets/pages/courses/OnlineEcon2110';
import Econ1100 from './assets/pages/courses/Fordham/Econ1100';
import Econ1200 from './assets/pages/courses/Fordham/Econ1200';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/research" element={<Research />} />
        <Route path="/pages/teaching.html" element={<Teaching />} />
        <Route path="/courses/Econ2110.html" element={<Econ2110 />} />
        <Route path="/courses/Econ303.html" element={<Econ303 />} />
        <Route path="/courses/Econ321.html" element={<Econ321 />} />
        <Route path="/courses/Online_Econ2110.html" element={<OnlineEcon2110 />} />
        <Route path="/courses/Fordham/Econ1100.html" element={<Econ1100/>} />
        <Route path="/courses/Fordham/Econ1200.html" element={<Econ1200 />} />

      </Routes>
    </Router>
  );
}
