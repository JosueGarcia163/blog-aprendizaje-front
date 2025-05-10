import React from "react";
import { Navbar } from "../../components/NavBar";
import YoImage from "../../../public/yo.jpg";

export const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-3xl mx-auto mt-20 p-8 bg-gray-200/80 backdrop-blur-md shadow-2xl rounded-2xl flex flex-col items-center text-center border border-gray-300">
        <h1 className="text-4xl font-bold text-blue-700 mb-4 drop-shadow-sm">Sobre mí</h1>

        <img
          src={YoImage}
          alt="Josue Garcia"
          className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-300 shadow-md"
        />

        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Josue Garcia</h2>

        <p className="text-gray-800 text-lg leading-relaxed mb-4">
          Hola, soy el creador de este blog. Espero que te guste y encuentres contenido útil.
          Soy un apasionado del desarrollo web y la programación. Me encanta compartir mis
          conocimientos y programar en mi tiempo libre.
        </p>

        <p className="text-gray-800 text-lg leading-relaxed">
          Tengo experiencia en desarrollo web con tecnologías como React + Vite, Node.js, MongoDB y más.
          Este blog está pensado como una plataforma educativa para cursos, publicaciones y recursos útiles.
        </p>
      </div>
    </div>
  );
};


