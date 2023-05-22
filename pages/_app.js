import GlobalStyle from "../styles";
import { plantData } from "@/db";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [plants, setPlants] = useState(plantData);

  const toggleFavorite = (plantId) => {
    setPlants(
      plants.map((plant) => {
        if (plant.id === plantId) {
          return {
            ...plant,
            isFavorite: plant.isFavorite ? !plant.isFavorite : true,
          };
        } else {
          return plant;
        }
      })
    );
  };

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        plants={plants}
        toggleFavorite={toggleFavorite}
      />
    </>
  );
}
