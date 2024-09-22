import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login  from './components/Login';
import Small from './components/Small';
import All from './components/All';
import Free from './components/Free';
import Large from './components/Large';
import Trend from './components/Trend';
import Home from './components/Home';
import Footer from './components/Footer';
import Allthemes from './components/Allthemes';

function App() {
  return (
    <>
     <Router>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/Home" element={<Home />} />
        <Route path="/large" element={<Large />} />
        <Route path="/small" element={<Small />} />
        <Route path="/all" element={<All />} />
        <Route path="/login" element={<Login />} />
        <Route path="/trend" element={<Trend />} />
        <Route path="/free" element={<Free />} />
        <Route path="/trend" element={<Trend />} />
        <Route path="/allthemes" element={<Allthemes />} />
      </Routes>
    </Router>
    <Footer/>   
    </>
  );
}

export default App;
