import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

import Login from "./components/Login";
import Register from "./components/Register";
import PostDetail from "./components/PostDetail";
import Hero from "./components/Hero";
import Foro from "./components/Foro";
import Noticias from "./components/Noticias";
import Informar from "./components/Informar";
import Juego from "./components/Juego";
import Create from "./components/Create";
import Inicio from "./headerbtns/inicio.png";
import InicioHover from "./headerbtns/iniciohover.png";
import Noticia from "./headerbtns/noticias.png";
import NoticiaHover from "./headerbtns/noticiashover.png";
import Forillo from "./headerbtns/Forillo.png";
import ForilloHover from "./headerbtns/forohovered.png";
import Informes from "./headerbtns/informes.png";
import InformesHover from "./headerbtns/informarhover.png";
import Juega from "./headerbtns/juega.png";
import bgd from "./headerbtns/bgms2.gif";
import bgfi from "./headerbtns/foro-informe.png"

function App() {
  const [backgroundImage, setBackgroundImage] = useState(`url(${bgd})`);
  


  const handleInicioClick = () => {
    setBackgroundImage(`url(${bgd})`);
  };
  const handleNoticiasClick = () => {
    setBackgroundImage(`url(${bgd})`);
  };
  const handleForoClick = () => {
    setBackgroundImage(`url(${bgfi})`);
  };
  const handleInformarClick = () => {
    setBackgroundImage(`url(${bgfi})`);
  };

  const posts = [
    { id: 1, title: "Ayuda", content: "Alguien me dice como se funciona este juego? Paso perdiendo...", author: "Nigromante77", avatar: "https://e0.pxfuel.com/wallpapers/603/24/desktop-wallpaper-hisoka-hisoka-anime-hunter-x-hunter-1080x1080-hisoka.jpg" },
    { id: 2, title: "Mal Juego", content: "Que clase de mal chiste es este juego?? salio de idea dsps de tomar?", author: "Panki99", avatar: "https://i.pinimg.com/564x/0e/c8/ab/0ec8ab469b010e41bdb9dbcf2c7ff1f6.jpg" },
    { id: 3, title: "Que prefieren?", content: "Soy yo o los devs se robaron todos los sprites de Metal Slug?", author: "OrkoVerdeHoja", avatar: "https://i.pinimg.com/originals/58/df/ae/58dfae343c0b0078546f3efda94e8cda.jpg" },
  ];

  return (
    <Router>
      <div className="App bg-fixed bg-cover" style={{ backgroundImage }}>
        <header className="header h-[70px]">
          <div className="logo">
            {/* Agrega el contenido del logo aquí */}
          </div>
          <nav className="w-full fixed top-0 left-0 bg-celeste py-4 h-[70px] bg-[url('header.png')]">
            <div className="mx-auto max-w-screen-lg grid grid-cols-6">
              <div className="col-span-1">
                <Link to="/Hero" onClick={handleInicioClick} className="group relative">
                  <img
                    src={Inicio}
                    alt="Inicio"
                    className="h-10 w-auto transition-opacity duration-300 ease-in-out group-hover:opacity-0"
                  />
                  <img
                    src={InicioHover}
                    alt="Inicio Hover"
                    className="h-15 w-auto absolute top-0 left-0 opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-90 group-hover:rotate-45 transition-all duration-300 ease-in-out"
                  />
                </Link>
              </div>
              <div className="col-span-1">
                <Link to="/Noticias" onClick={handleNoticiasClick} className="group relative">
                  <img
                    src={Noticia}
                    alt="Noticias"
                    className="h-10 w-auto transition-opacity duration-300 ease-in-out group-hover:opacity-0"
                  />
                  <img
                    src={NoticiaHover}
                    alt="Noticia Hover"
                    className="h-15 w-auto absolute top-0 left-0 opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 group-hover:-rotate-45 transition-all duration-300 ease-in-out"
                  />
                </Link>
              </div>
              <div className="col-span-2">
                <Link to="/Juego" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hover:scale-110 hover:animate-pulse transition-all duration-300 ease-in-out ">
                  <img src={Juega} alt="Noticias" className="h-15 w-auto" />
                </Link>
              </div>
              <div className="col-span-1">
                <Link to="/Foro" onClick={handleForoClick} className="group relative">
                  <img
                    src={Forillo}
                    alt="Foro"
                    className="h-10 w-auto transition-opacity duration-300 ease-in-out group-hover:opacity-0"
                  />
                  <img
                    src={ForilloHover}
                    alt="Foro Hover"
                    className="h-15 w-auto absolute top-0 left-0 opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-90 group-hover:rotate-45 transition-all duration-300 ease-in-out"
                  />
                </Link>
              </div>
              <div className="col-span-1">
                <Link to="/Informar" onClick={handleInformarClick} className="group relative">
                  <img
                    src={Informes}
                    alt="Informar"
                    className="h-10 w-auto transition-opacity duration-300 ease-in-out group-hover:opacity-0"
                  />
                  <img
                    src={InformesHover}
                    alt="Informar Hover"
                    className="h-15 w-auto absolute top-0 left-0 opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-90 group-hover:-rotate-45 transition-all duration-300 ease-in-out"
                  />
                </Link>
              </div>
            </div>
          </nav>
        </header>
        <Routes>
          <Route path="/Hero" element={<Hero />} />
          <Route path="/Noticias" element={<Noticias />} />
          <Route path="/Foro" element={<Foro posts={posts} />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Foro/postdet/:id" element={<PostDetail posts={posts} />} />
          <Route path="/Informar" element={<Informar />} />
        </Routes>
        <footer className="py-4 text-center fixed bottom-0 w-full bg-[url('header.png')]">
          <p className="px-6 text-white text-xl font-rubik hover:text-rosado">
            © 2023 KaChiPumZ!. Tus derechos humanos reservados.
          </p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
