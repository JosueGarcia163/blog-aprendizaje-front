import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Input } from "../Input";
import { usePostComment } from "../../shared/hooks";
import {
  validateUsername,
  validateContent,
  validateUsernameMessage,
  validateContentMessage,
} from "../../shared/validators";
import { Navbar } from "../../components/NavBar";

export const CommentPost = () => {
  const { id: publicationId } = useParams();
  const navigate = useNavigate();
  const { createCommentData, isLoading } = usePostComment();

  const [formState, setFormState] = useState({
    username: "",
    content: "",
  });

  const [errors, setErrors] = useState({
    username: false,
    content: false,
  });

  const handleChange = (field, value) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
  };

  //actualizamos el estado del formulario si el usuario cambia el valor de los inputs
  const handleBlur = (field) => {
    const isValid =
      field === "username"
        ? validateUsername(formState.username)
        : validateContent(formState.content);
    setErrors((prev) => ({ ...prev, [field]: !isValid }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isUsernameValid = validateUsername(formState.username);
    const isContentValid = validateContent(formState.content);

    if (!isUsernameValid || !isContentValid) {
      setErrors({
        username: !isUsernameValid,
        content: !isContentValid,
      });
      return;
    }

    createCommentData({
      username: formState.username,
      content: formState.content,
      publication: publicationId,
    });
  };

  const isSubmitDisabled =
    isLoading || errors.username || errors.content || !formState.username || !formState.content;

  return (
    <div className="min-h-screen bg-gray-100"
      style={{ backgroundImage: "url('https://abhinbound.com/hubfs/blog.jpg')" }}
    >

      <Navbar />
      <div className="flex justify-center pt-10">
        <div className="max-w-md w-full p-6 bg-white shadow-lg rounded-2xl">
          <h2 className="text-2xl font-semibold text-center text-blue-600 mb-6">
            Agregar Comentario
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              field="username"
              label="Tu nombre"
              value={formState.username}
              onChangeHandler={(val) => handleChange("username", val)}
              onBlurHandler={() => handleBlur("username")}
              type="text"
              showErrorMessage={errors.username}
              validationMessage={validateUsernameMessage}
            />
            <Input
              field="content"
              label="Comentario"
              value={formState.content}
              onChangeHandler={(val) => handleChange("content", val)}
              onBlurHandler={() => handleBlur("content")}
              type="text"
              showErrorMessage={errors.content}
              validationMessage={validateContentMessage}
            />
            <button
              type="submit"
              disabled={isSubmitDisabled}
              className="w-full py-2 px-4 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              Enviar Comentario
            </button>
            <button
              type="button"
              onClick={() => navigate(`/publication/${publicationId}`)}
              className="w-full py-2 px-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-all duration-300"
            >
              ⬅️ Regresar
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};
