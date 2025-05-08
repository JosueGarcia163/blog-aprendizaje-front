import { useEffect, useState } from "react";
import { getPublicationsByCourse } from "../../services/api"; 

export const useCoursePublications = (courseId) => {
  const [publications, setPublications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPublications = async () => {
      const res = await getPublicationsByCourse(courseId);
      if (!res.error) {
        setPublications(res.data);
      }
      setLoading(false);
    };

    fetchPublications();
  }, [courseId]);

  return { publications, loading };
};
