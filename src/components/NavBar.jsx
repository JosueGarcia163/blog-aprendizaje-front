import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="bg-blue-200 shadow-md p-7 flex justify-between items-center">
      <div className="flex items-center space-x-2 text-xl font-bold text-blue-600">
        <img src={"/LogoD.png"} alt="Logo" className="w-12 h-12 object-contain" />
        <Link to="/">LearningBlog</Link>
      </div>


      <div className="hidden md:flex space-x-4">
        <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">
          Inicio
        </Link>
        <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium">
          Sobre Mi
        </Link>
      </div>

      {/* Menu para móviles */}
      <div className="md:hidden">
        <Menu className="text-gray-700" />
      </div>
      <p className="text-2xl font-extrabold text-emerald-500 tracking-wide drop-shadow-sm italic">
        Josue David Garcia Mendez - 2023324 · My Blog de Aprendizaje
      </p>
    </nav>
  );
};
