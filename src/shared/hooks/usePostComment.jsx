import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createComment } from "../../services/api";
import toast from "react-hot-toast";

export const usePostComment = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const createCommentData = async (commentData) => {
    setIsLoading(true);
    try {
      await createComment(commentData);
      toast.success("Comentario creado correctamente");
      navigate("/");
    } catch (e) {
      toast.error(e?.response?.data?.message || "Error al crear el comentario");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    createCommentData,
    isLoading,
  };
};
