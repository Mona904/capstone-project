import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { StyledImage } from "./StyledImage";
import { FiHeart as Heart } from "react-icons/fi";

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
const ButtonContainer = styled.div`
  position: relative;
`;

const Button = styled.button`
  position: absolute;
  top: -9rem;
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

const PlantCard = ({ plant, toggleFavorite }) => {
  const { id, name, image, water, soil, sunlight, isFavorite } = plant;

  const handleClick = () => {
    toggleFavorite(id);
  };

  return (
    <>
      <Link href={`/plant/${id}`}>
        <Container>
          <StyledImage
            src={image}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <Title>{name}</Title>
        </Container>
      </Link>
      <ButtonContainer>
        <Button type="button" onClick={handleClick} isFavorite={isFavorite}>
          <Heart />
        </Button>
      </ButtonContainer>
    </>
  );
};

export default PlantCard;
