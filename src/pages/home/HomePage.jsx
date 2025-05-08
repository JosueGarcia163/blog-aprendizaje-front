import React from "react";
import { Navbar } from "../../components/NavBar";
import { useNavigate } from "react-router-dom";


const courses = [
  { id: "1", name: "Taller" },
  { id: "2", name: "Practica supervisada" },
  { id: "3", name: "Tecnologia" },
];


export const HomePage = () => {
  const navigate = useNavigate();
  const handleCourseClick = (courseId) => {
    
    navigate(`/course/${courseId}/publications`);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/LogoA.png')" }}
    >
      <Navbar />
      <div className="flex flex-col items-center justify-center pt-32 px-4">
        <h1 className="text-4xl font-bold text-white mb-12 text-center drop-shadow-lg">
          Selecciona el curso para ver sus publicaciones
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-5xl">
          {courses.map((course) => (
            <div
              key={course.id}
              className="min-h-[150px] bg-amber-100/70 shadow-2xl rounded-2xl p-10 cursor-pointer hover:scale-105 transform transition-all duration-300"
              onClick={() => handleCourseClick(course.id)}
            >
              <h2 className="text-2xl font-semibold text-center text-gray-800">
                {course.name}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
