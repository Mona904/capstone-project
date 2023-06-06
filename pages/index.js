import React, { useEffect, useState } from "react";
import Link from "next/link";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
  display: flex;
  background-size: 120%;
  background-image: url("/leaf.jpg");
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const PlantPilotText = styled.h1`
  font-size: 3rem;
  margin-top: 1rem;
  color: #f2e8dc;
  animation: ${fadeIn} 1s ease-in-out;
`;

const StyledLink = styled(Link)`
  margin-top: 2rem;
  font-size: 1.2rem;
  text-decoration: none;
  color: #f2e8dc;
  border: 1px solid #f2e8dc;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  background-color: transparent;
  animation: ${fadeIn} 3s ease-in-out;
`;

const PicturePage = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true);
  }, []);

  return (
    <Container>
      {showContent && (
        <>
          <PlantPilotText>PlantPilot</PlantPilotText>
          <h2 style={{ color: "#f2e8dc", fontWeight: "normal" }}>
            Discover the perfect plants for your garden
          </h2>
          <StyledLink href="/plants">View Plants</StyledLink>
        </>
      )}
    </Container>
  );
};

export default PicturePage;
