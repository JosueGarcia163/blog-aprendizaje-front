import { useState, useEffect, useCallback } from "react";
import toast from "react-hot-toast";
import { getCourses } from "../../services"; 

export const useCourses = () => {
  const [courses, setCourses] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const fetchCourses = useCallback(async () => {
    setIsFetching(true);
    const response = await getCourses(); 

    if (response.error) {
      toast.error(response.e?.response?.data?.message || "Error al obtener los cursos");
      setIsFetching(false);
      return;
    }

    setCourses(response.data.courses || response.data); 
    setIsFetching(false);
  }, []);

  useEffect(() => {
    fetchCourses();
  }, [fetchCourses]);

  return {
    courses,
    isFetching,
    fetchCourses
  };
};
