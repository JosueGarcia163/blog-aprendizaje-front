import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useComments, usePublicationDetails } from "../../shared/hooks";
import { CommentCard } from "../../components/comments/CommentCard";
import { Navbar } from "../../components/NavBar";

export const CommentsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { publication, fetchPublicationDetails } = usePublicationDetails();
  const { comments, fetchComments } = useComments();

  useEffect(() => {
    if (id) {
      fetchPublicationDetails(id);
      fetchComments(id);
    }
  }, [id]);

  const handleBack = () => {
    navigate(`/publication/${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-100"
    style={{ backgroundImage: "url('/LogoA.png')" }}
    >
      <Navbar />
      <div className="pt-24 px-6 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Comentarios de: {publication?.title}
        </h1>

        <button
          onClick={handleBack}
          className="mb-6 px-5 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition"
        >
          ← Regresar
        </button>

        {comments.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-4">
            {comments.map((comment, index) => (
              <CommentCard key={index} comment={comment} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-lg">No hay comentarios disponibles.</p>
        )}
      </div>
    </div>
  );
};
