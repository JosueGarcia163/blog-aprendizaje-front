import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="bg-blue-200 shadow-md p-7 flex justify-between items-center">
      <div className="text-xl font-bold text-blue-600">
        <Link to="/">LearningBlog</Link>
      </div>

      <div className="hidden md:flex space-x-4">
        <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">
          Inicio
        </Link>
        <Link to="/cursos" className="text-gray-700 hover:text-blue-600 font-medium">
          Cursos
        </Link>
        <Link to="/sobre" className="text-gray-700 hover:text-blue-600 font-medium">
          Sobre Nosotros
        </Link>
      </div>

      {/* Menu para móviles */}
      <div className="md:hidden">
        <Menu className="text-gray-700" />
      </div>
      <p className="text-red-500 font-bold">TEST</p>

    </nav>
  );
};
