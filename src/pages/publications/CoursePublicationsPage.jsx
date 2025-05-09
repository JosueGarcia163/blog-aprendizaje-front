import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { usePublications } from "../../shared/hooks";
import { Publications } from "../../components/publications/Publications";
import { Navbar } from "../../components/NavBar";

export const CoursePublicationsPage = () => {
  const { courseId } = useParams();
  const { publications, isFetching, fetchPublicationsByCourse } = usePublications();

  useEffect(() => {
    if (courseId) {
      fetchPublicationsByCourse(courseId);
    }
  }, [courseId, fetchPublicationsByCourse]);

  return (
    <div className="min-h-screen bg-gray-50"
    style={{ backgroundImage: "url('/LogoA.png')" }}
    >
      <Navbar />
      <div className="pt-28 px-6 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Publicaciones del curso
        </h1>
        {isFetching ? (
          <p className="text-gray-500">Cargando publicaciones...</p>
        ) : publications.length === 0 ? (
          <p className="text-gray-500">No hay publicaciones para este curso.</p>
        ) : (
          <Publications publications={publications} />
        )}
      </div>
    </div>
  );
};
