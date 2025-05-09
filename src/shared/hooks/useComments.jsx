import { useState } from "react";
import { getCommentsByPublication } from "../../services/api";

export const useComments = () => {
  const [comments, setComments] = useState([]);

  const fetchComments = async (publicationId) => {
    const response = await getCommentsByPublication(publicationId);
    if (!response.error) {
      setComments(response.data.comments);
    }
  };

  return {
    comments,
    fetchComments,
  };
};
