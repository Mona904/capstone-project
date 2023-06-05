import { useRouter } from "next/router";
import { StyledImage } from "@/components/StyledImage";
import styled from "styled-components";

const ImageContainer = styled.div`
  position: relative;
  height: 200px;
`;

export default function PlantDetailsPage({ plants }) {
  const router = useRouter();
  const { id } = router.query;

  const selectedPlant = plants.find((plant) => plant.id === id);

  return (
    <>
      {selectedPlant ? (
        <div>
          <h4>{selectedPlant.name}</h4>
          <ImageContainer>
            <StyledImage
              src={selectedPlant.image}
              alt={selectedPlant.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </ImageContainer>
          <p>Water: {selectedPlant.water}</p>
          <p>Soil: {selectedPlant.soil}</p>
          <p>Sunlight: {selectedPlant.sunlight}</p>
        </div>
      ) : (
        <div>Plant not found</div>
      )}
    </>
  );
}
