import { Navigate } from "react-router-dom";
import { HomePage } from "./pages/home/HomePage.jsx";
import { CoursePublicationsPage } from "./pages/publications/CoursePublicationsPage.jsx";
import { PublicationDetailsPage } from "./pages/publications/PublicationDetailsPage.jsx";
import { CommentsPage } from "./pages/comments/CommentsPage.jsx";
import { CommentPost } from "./components/comments/ComentPost.jsx";

export const routes = [
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/course/:courseId/publications",
        element: <CoursePublicationsPage />,
    },
    {
        path: "/publication/:id",
        element: <PublicationDetailsPage  />,
    },
    {
        path: "/publication/:id/comments",
        element: <CommentsPage  />,
    },

    {
        path: "/publication/:id/comment/post",
        element: <CommentPost />,
    },

    {
        path: "*",
        element: <Navigate to="/" />,
    },

]