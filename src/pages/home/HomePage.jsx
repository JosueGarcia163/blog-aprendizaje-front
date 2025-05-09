import React from "react";
import { Navbar } from "../../components/NavBar";
import { Courses } from "../../components/courses/Courses";
import { useCourses } from "../../shared/hooks";

export const HomePage = () => {
  const { courses, isFetching } = useCourses();

return (
  <div
    className="min-h-screen bg-repeat bg-center"
    style={{
      backgroundImage: "url('/LogoA.png')",
      backgroundSize: "400px",
    }}
  >
    <Navbar />
    <div className="flex flex-col items-center justify-center pt-32 px-4">
      <h1 className="text-4xl font-bold text-white mb-12 text-center drop-shadow-lg">
        Selecciona el curso para ver sus publicaciones
      </h1>
      {isFetching ? (
        <p className="text-white">Cargando cursos...</p>
      ) : (
        <Courses courses={courses} />
      )}
    </div>
  </div>
);

};

