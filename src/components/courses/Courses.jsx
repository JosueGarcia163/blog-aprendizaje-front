import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

export const Courses = ({ courses }) => {
  const navigate = useNavigate();

  const handleCourseClick = (id) => {
    navigate(`/course/${id}/publications`);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-5xl">
      {courses.map((course) => (
        <div
          key={course._id}
          className="min-h-[150px] bg-amber-100/90 shadow-2xl rounded-2xl p-10 cursor-pointer hover:scale-105 transform transition-all duration-300"
          onClick={() => handleCourseClick(course._id)}
        >
          <img
            src={course.image}
            alt={`Imagen de ${course.name}`}
            className="w-full h-40 object-cover rounded-xl mb-4"
          />
          <h2 className="text-2xl font-semibold text-center text-gray-800">
            {course.name}
          </h2>
        </div>
      ))}
    </div>
  );
};

Courses.propTypes = {
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};
