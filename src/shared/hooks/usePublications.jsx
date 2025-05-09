import { useState, useCallback } from "react";
import toast from "react-hot-toast";
import { getPublicationsByCourse } from "../../services";

export const usePublications = () => {
  const [publications, setPublications] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const fetchPublicationsByCourse = useCallback(async (courseId) => {
    setIsFetching(true);
    const response = await getPublicationsByCourse(courseId);

    if (response.error) {
      toast.error(
        response.e?.response?.data?.message || "Error al obtener las publicaciones"
      );
      setIsFetching(false);
      return;
    }

    setPublications(response.data.publications || response.data);
    setIsFetching(false);
  }, []);

  return {
    publications,
    isFetching,
    fetchPublicationsByCourse
  };
};
