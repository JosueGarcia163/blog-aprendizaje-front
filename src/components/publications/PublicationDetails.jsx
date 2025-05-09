import React, { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export const PublicationDetails = ({ publication }) => {
  const navigate = useNavigate();
  const [showComments, setShowComments] = useState(false);


  if (!publication) return null;

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 max-w-4xl mx-auto mt-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{publication.title}</h1>
      <p className="text-gray-700 text-lg mb-6">{publication.description}</p>

      <div className="text-gray-500 text-sm mb-2">
        <strong>Curso:</strong> {publication.course?.name} - {publication.course?.description}
      </div>

      <div className="text-gray-400 text-xs mb-4">
        <strong>Fecha:</strong> {new Date(publication.createdAt).toLocaleDateString()}
      </div>

      <button
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition mb-4"
        onClick={() => navigate(`/publication/${publication._id}/comments`)}
      >
        Ver comentarios
      </button>

      <button
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition mb-4"
        onClick={() => navigate(`/publication/${publication._id}/comment/post`)}
      >
        Agregar comentario
      </button>
    </div>
  );
};

PublicationDetails.propTypes = {
  publication: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    createdAt: PropTypes.string,
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

