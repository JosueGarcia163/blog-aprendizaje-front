import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export const Publications = ({ publications }) => {
  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/publication/${id}`);
  };

  const sortedPublications = [...publications].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
      {sortedPublications.map((pub) => (
        <div
          key={pub._id}
          className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
          onClick={() => handleNavigate(pub._id)}
        >
          <h3 className="text-xl font-bold text-gray-800 mb-2">{pub.title}</h3>
          <p className="text-gray-600">{pub.description}</p>
          <p className="text-sm text-gray-400 mt-4 text-right">
            {new Date(pub.createdAt).toLocaleDateString()}
          </p>
        </div>
      ))}
    </div>
  );
};

Publications.propTypes = {
  publications: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      createdAt: PropTypes.string,
    })
  ).isRequired,
};
