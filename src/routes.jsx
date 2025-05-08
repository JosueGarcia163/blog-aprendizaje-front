import { Navigate } from "react-router-dom";
import { HomePage } from "./pages/home/HomePage.jsx";
import { CoursePublications } from "./components/CoursePublications.jsx";

export const routes = [
    {
        path: "/",
        element: <HomePage />,
    }, 
    {
        path:"/course/:courseId/publications",
    element: <CoursePublications />,
  },
    
    {
        path: "*",
        element: <Navigate to="/" />,
    },

]