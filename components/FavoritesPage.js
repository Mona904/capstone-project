import { useState } from "react";
import styled from "styled-components";
import { FiHeart } from "react-icons/fi";
import { useRouter } from "next/router";
import PlantCard from "./PlantCard";

const HeartIcon = styled(FiHeart)`
  stroke: ${({ isFavorite }) => (isFavorite ? "#e5f7eb" : "#173e14")}; /* Cream when favorite, dark green when not favorite */
  fill: ${({ isFavorite }) => (isFavorite ? "#e5f7eb" : "none")}; /* Cream when favorite, no fill when not favorite */
  stroke-width: 2px;
  cursor: pointer;
`;



const BackButton = styled.button`
  margin-top: 1rem;
  background-color: #173e14;
  color: #fff;
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;
  border-radius: 0.5rem;
`;

function FavoritesPage({ plants }) {
  const [favorites, setFavorites] = useState([]);
  const router = useRouter();

  const toggleFavorite = (plantId) => {
    if (favorites.includes(plantId)) {
      setFavorites(favorites.filter((id) => id !== plantId));
    } else {
      setFavorites([...favorites, plantId]);
    }
  };

  const isFavorite = (plantId) => favorites.includes(plantId);

  const navigateToPlantDetails = (plantId) => {
    router.push(`/plants/${plantId}`); // Replace "/plants/:id" with your actual plant details route
  };

  return (
    <div>
      <h1>Favorites</h1>
      <div>
        {plants.map((plant) => (
          <div key={plant.id}>
            <PlantCard
              name={plant.name}
              image={plant.image}
              onClick={() => navigateToPlantDetails(plant.id)}
            />
            <HeartIcon
              isFavorite={isFavorite(plant.id)}
              onClick={() => toggleFavorite(plant.id)}
            />
          </div>
        ))}
      </div>
      <BackButton onClick={() => router.back()}>Back to Gallery</BackButton>
    </div>
  );
}

export default FavoritesPage;
