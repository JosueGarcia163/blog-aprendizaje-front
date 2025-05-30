import React from "react";
import { useRoutes } from "react-router-dom";
import { routes } from "./routes.jsx";
import { Toaster } from "react-hot-toast";

export const App = () => {
  let element = useRoutes(routes);
  return (
    <>
      {element}
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};