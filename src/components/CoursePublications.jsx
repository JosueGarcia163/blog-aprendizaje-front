import React from "react";
import { useParams } from "react-router-dom";
import { useCoursePublications } from "../shared/hooks/useCoursePublications";

export const CoursePublications = () => {
  const { courseId } = useParams();
  const { publications, loading } = useCoursePublications(courseId);

  if (loading) return <p className="text-center py-20">Cargando publicaciones...</p>;

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <h1 className="text-3xl font-bold mb-8 text-center">Publicaciones del curso</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {publications.map((pub) => (
          <div key={pub._id} className="bg-white shadow-md rounded-xl p-6">
            <h2 className="text-xl font-semibold">{pub.title}</h2>
            <p className="mt-2 text-gray-600">{pub.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
