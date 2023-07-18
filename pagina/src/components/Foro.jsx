import React from 'react';
import { useState } from "react";
import { Link } from "react-router-dom";
import bgfi from "../headerbtns/foro-informe.png";
import bgd from "../headerbtns/bgms2.gif";

const Foro = ({ posts }) => {
  const [backgroundImage, setBackgroundImage] = useState(`url(${bgfi})`);
  const handleVerDetallesClick = () => {
    setBackgroundImage(`url(${bgfi})`);
  };

  return (
    <div className="bg-transparent min-h-screen py-44 bg-cover bg-fixed" style={{ backgroundImage }}>
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-8xl font-rubik text-white hover: mb-8 drop-shadow-2xl">Foro de Discusión</h1>
        <div className="mb-10">
          <input type="text" className="w-full py-2 px-96 border border-rosado rounded-lg shadow-sm bg-celeste bg-opacity-40 text-white focus:border-rosado placeholder:text-white" placeholder="Buscas algo en especifico?" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map(post => (
            <div key={post.id} className="bg-celeste rounded-lg shadow-md overflow-hidden">
              <div className="bg-rosado text-white px-4 py-2 flex items-center">
                <img src={post.avatar} alt={post.author} className="w-8 h-8 rounded-full mr-2" />
                <h2 className="text-xl font-semibold">{post.title}</h2>
                <Link to={`/Foro/postdet/${post.id}`} onClick={handleVerDetallesClick} className="block ml-auto text-sm text-white font-semibold bg-rosado hover:text-celeste py-2 px-4 rounded-lg">
                  Ver detalles
                </Link>
              </div>
              <div className="p-6">
                <p className="text-white font-semibold">{post.content}</p>
              </div>
              <div className="bg-celeste border-2 border-white rounded-lg px-4 py-2 flex justify-between items-center">
                <p className="text-sm text-white font-semibold hover:text-rosado">Publicado por {post.author}</p>
                <button className="bg-rosado hover:bg-rosado-dark text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600">
                  Responder
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Foro;

