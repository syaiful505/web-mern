import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './components/auth/Login';
import Register from './components/auth/Register';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" caseSensitive={false} element={<Home />} />
        <Route path="/about" caseSensitive={false} element={<About />} />
        <Route path="/services" caseSensitive={false} element={<Services />} />
        <Route path="/contact" caseSensitive={false} element={<Contact />} />
        <Route path="/login" caseSensitive={false} element={<Login />} />
        <Route path="/register" caseSensitive={false} element={<Register />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
