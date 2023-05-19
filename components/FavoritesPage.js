import { useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import PlantList from "./PlantList";

const BackButton = styled.button`
  margin-top: 1rem;
  background-color: #173e14;
  color: #fff;
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;
  border-radius: 0.5rem;
`;

function FavoritesPage({ plants, toggleFavorite }) {
  const favorites = plants.filter((plant) => plant.isFavorite);
  const router = useRouter();

  return (
    <>
      <h1>Favorites</h1>

      <PlantList plants={favorites} toggleFavorite={toggleFavorite} />

      <BackButton onClick={() => router.back()}>Back to Gallery</BackButton>
    </>
  );
}

export default FavoritesPage;
