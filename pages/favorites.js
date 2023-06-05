import React from "react";
import PlantList from "@/components/PlantList";
import styled from "styled-components";
import { useRouter } from "next/router";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const BackButton = styled.button`
  background-color: #173e14;
  color: #fff;
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;
  border-radius: 0.5rem;
`;

const Message = styled.p`
  color: #fff;
`;

export default function Favorites({ plants, toggleFavorite }) {
  const favorites = plants.filter((plant) => plant.isFavorite);
  const router = useRouter();

  const handleBack = () => {
    router.push("/");
  };

  return (
    <Container>
      <h1 style={{ color: "#fff" }}>Favorites</h1>

      {favorites.length > 0 ? (
        <PlantList plants={favorites} toggleFavorite={toggleFavorite} />
      ) : (
        <p>No plants added to favorites</p>
      )}

      <BackButton onClick={handleBack}>Back to Homepage</BackButton>
    </Container>
  );
}
