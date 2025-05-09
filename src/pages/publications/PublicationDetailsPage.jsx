import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { usePublicationDetails } from "../../shared/hooks";
import { PublicationDetails } from "../../components/publications/PublicationDetails";

import { Navbar } from "../../components/NavBar";

export const PublicationDetailsPage = () => {
  const { id } = useParams();
  const { publication, isFetching, fetchPublicationDetails } = usePublicationDetails();

  useEffect(() => {
    if (id) {
      fetchPublicationDetails(id);
    }
  }, [id, fetchPublicationDetails]);

  return (
    <div className="min-h-screen bg-gray-100"
    style={{ backgroundImage: "url('/LogoA.png')" }}
    >
      <Navbar />
      <div className="pt-24 px-4">
        {isFetching ? (
          <p className="text-center text-gray-500">Cargando detalles...</p>
        ) : (
          <PublicationDetails publication={publication} />
        )}
      </div>
    </div>
  );
};
