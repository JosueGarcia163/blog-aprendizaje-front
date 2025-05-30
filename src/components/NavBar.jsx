import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import LogoD from "../../public/LogoD.png";

export const Navbar = () => {
  return (
    <nav className="bg-blue-200 shadow-md p-7 flex justify-between items-center">
      <div className="flex items-center space-x-2 text-xl font-bold text-blue-600">
        <img src={LogoD} alt="Logo" className="w-12 h-12 object-contain" />
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
      <p className="text-red-500 font-bold">Bienvenido a mi Blog</p>

    </nav>
  );
};
