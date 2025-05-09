import { useState, useCallback } from "react";
import toast from "react-hot-toast";
import { getPublicationById } from "../../services";

export const usePublicationDetails = () => {
  const [publication, setPublication] = useState(null);
  const [isFetching, setIsFetching] = useState(false);

  const fetchPublicationDetails = useCallback(async (id) => {
    setIsFetching(true);
    const response = await getPublicationById(id);

    if (response.error) {
      toast.error(response.e?.response?.data?.message || "Error al obtener la publicación");
      setIsFetching(false);
      return;
    }

    setPublication(response.data.publicacion);
    setIsFetching(false);
  }, []);

  return {
    publication,
    isFetching,
    fetchPublicationDetails,
  };
};
