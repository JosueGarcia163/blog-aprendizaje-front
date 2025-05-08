import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3001/learningBlog/v1",
  timeout: 5000,
  httpsAgent: false,
});

export const getPublications = async () => {
  try {
    return await apiClient.get("publication/");
  } catch (e) {
    return {
      error: true,
      e: e,
    };
  }
};

export const getComents = async () => {
  try {
    return await apiClient.get("comment/");
  } catch (e) {
    return {
      error: true,
      e: e,
    };
  }
};

export const createComment = async (data) => {
  try {
    return await apiClient.post("comment/createComment", data);
  } catch (e) {
    return {
      error: true,
      e,
    };
  }
};

export const getPublicationById = async (id) => {
  try {
    return await apiClient.get(`publication/getPublication/${id}`);
  } catch (e) {
    return {
      error: true,
      e: e,
    };
  }
};

export const getCouses = async (id) => {
  try {
    return await apiClient.get(`course/${id}`);
  } catch (e) {
    return {
      error: true,
      e: e,
    };
  }
}

export const getPublicationsByCourse = async (courseId) => {
  try {
    return await apiClient.get(`publication/byCourse/${courseId}`);
  } catch (e) {
    return {
      error: true,
      e,
    };
  }
};




