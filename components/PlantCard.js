import styled from "styled-components";
import Image from "next/image";
import { FiHeart as Heart } from "react-icons/fi";
const StyledImage = styled(Image)`
  object-fit: cover;
`;

const Container = styled.article`
  height: 100%;
  width: 100%;
  position: relative;
  background-color: #173e14;
`;

const Title = styled.h2`
  position: absolute;
  bottom: -1px;
  margin: 0;
  background-color: #e5f7eb;
  width: 100%;
  padding: 2px;
  font-size: 1rem;
`;
const Button = styled.button`
  position: absolute;
`;

function PlantCard({ name, image, id, toggleFavorite }) {
  return (
    <Container>
      <StyledImage
        src={image}
        alt={name}
        fill
        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
      />

      <Button type="button" onClick={() => toggleFavorite(id)}>
        <Heart />
      </Button>

      <Title>{name}</Title>
    </Container>
  );
}

export default PlantCard;
