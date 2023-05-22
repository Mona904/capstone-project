import PlantList from "@/components/PlantList";
import styled from "styled-components";
import { useRouter } from "next/router";
import BackLink from "next/link";

const BackButton = styled.button`
  margin-top: 1rem;
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

  return (
    <>
      <h1 style={{ color: "#fff" }}>Favorites</h1>

      {favorites.length > 0 ? (
        <PlantList plants={favorites} toggleFavorite={toggleFavorite} />
      ) : (
        <Message>No plants added to favorites.</Message>
      )}

      <BackLink href="/">Back to Gallery</BackLink>
    </>
  );
}
