import { useRouter } from "next/router";
import { StyledImage } from "@/components/StyledImage";
import styled from "styled-components";
import Link from "next/link";

const ImageContainer = styled.div`
  position: relative;
  height: 100px;
`;

const DetailItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  border: 1px solid #000;
  border-radius: 4px;
  padding: 0.5rem;
`;

const WaterDetail = styled(DetailItem)`
  background-color: lightblue;
`;

const SoilDetail = styled(DetailItem)`
  background-color: lightgreen;
`;

const SunlightDetail = styled(DetailItem)`
  background-color: lightyellow;
`;

const BackButton = styled.button`
  background-color: #173e14;
  color: #fff;
  display: flex;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 0.5rem;
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
          <WaterDetail>
            <strong>💧 Water:</strong> {selectedPlant.water}
          </WaterDetail>
          <SoilDetail>
            <strong>🌱 Soil:</strong> {selectedPlant.soil}
          </SoilDetail>
          <SunlightDetail>
            <strong>☀️ Sunlight:</strong> {selectedPlant.sunlight}
          </SunlightDetail>
          <Link href="/plants">
            <BackButton>Back to Plants List</BackButton>
          </Link>
        </div>
      ) : (
        <div>Plant not found</div>
      )}
    </>
  );
}
