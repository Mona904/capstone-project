import React from "react";
import Link from "next/link";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  background-size: 120%;
  background-image: url("/leaf.jpg");
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Image = styled.img`
  width: 300px;
  height: auto;
`;

const Text = styled.p`
  font-size: 1.5rem;
  margin-top: 1rem;
  color: white;
`;

const StyledLink = styled(Link)`
  margin-top: 2rem;
  font-size: 1.2rem;
  text-decoration: none;
  color: #000;
  border: 1px solid #000;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  background-color: white;
`;

const PicturePage = () => {
  return (
    <Container>
      <Text>PlantPilot</Text>
      <StyledLink href="/plants">View Plants</StyledLink>
    </Container>
  );
};

export default PicturePage;
