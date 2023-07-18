
import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Foro from './Foro';
import Hero from './Hero';
import  Noticias  from './Noticias';
import Informar from './Informar'







const Navbar = () => {
  const links = [
    { name: "INICIO", link: "/Hero" },
    { name: "NOTICIAS", link: "/noticias" },
    { name: "FORO", link: "/foro" },
    { name: "INFORMAR", link: "/informar" },
  ];

  return (
    <nav>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <Link to={link.link}>{link.name}</Link>
          </li>
        ))}
      </ul>

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/foro" element={<Foro />} />
        <Route path="/informar" element={<Informar />} />
        {/* Otros componentes y rutas aquí */}
      </Routes>
    </nav>
  );
};

export default Navbar;
    
