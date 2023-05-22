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
  top: 0.5rem;
  right: 0.5rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  z-index: 1;

  svg {
    font-size: 1.2rem;
    fill: ${({ isFavorite }) => (isFavorite ? "red" : "inherit")};
  }

  &:hover {
    svg {
      color: red;
    }
  }
`;

function PlantCard({ name, image, id, isFavorite, toggleFavorite }) {
  const handleClick = () => {
    toggleFavorite(id);
  };

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

      <Button type="button" onClick={handleClick} isFavorite={isFavorite}>
        <Heart />
      </Button>

      <Title>{name}</Title>
    </Container>
  );
}

export default PlantCard;
