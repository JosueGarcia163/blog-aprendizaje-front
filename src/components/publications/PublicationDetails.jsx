import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export const PublicationDetails = ({ publication }) => {
  const navigate = useNavigate();

  if (!publication) return null;

  return (
    <div className="bg-gray-200/80 backdrop-blur-md rounded-2xl shadow-2xl p-8 max-w-4xl mx-auto mt-12 transition-all">
      {publication.profilePicture && (
        <img
          src={`http://localhost:3001/uploads/profile-pictures/${publication.profilePicture}`}
          alt={`Imagen de ${publication.title}`}
          className="w-full h-80 object-cover object-top rounded-xl mb-6"
          crossOrigin="anonymous"
        />
      )}

      <h1 className="text-3xl font-bold text-gray-800 mb-4">{publication.title}</h1>
      <p className="text-gray-700 text-lg mb-6">{publication.description}</p>

      <div className="text-gray-600 text-sm mb-2">
        <strong>Curso:</strong> {publication.course?.name} – {publication.course?.description}
      </div>

      <div className="text-gray-500 text-xs mb-6">
        <strong>Fecha:</strong> {new Date(publication.createdAt).toLocaleDateString()}
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => navigate(`/publication/${publication._id}/comments`)}
          className="bg-blue-600 text-white px-5 py-3 rounded-xl font-medium shadow-md hover:bg-blue-700 transition-all"
        >
          Ver Comentarios
        </button>
        <button
          onClick={() => navigate(`/publication/${publication._id}/comment/post`)}
          className="bg-green-600 text-white px-5 py-3 rounded-xl font-medium shadow-md hover:bg-green-700 transition-all"
        >
          Agregar Comentario
        </button>
      </div>
    </div>
  );
};

PublicationDetails.propTypes = {
  publication: PropTypes.shape({
    _id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    createdAt: PropTypes.string,
    profilePicture: PropTypes.string,
    course: PropTypes.shape({
      name: PropTypes.string,
      description: PropTypes.string,
    }),
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        content: PropTypes.string,
      })
    ),
  }),
};



