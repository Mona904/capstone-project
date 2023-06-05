import React, { useState, useEffect } from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: sticky;
  top: 0;
  left: 0;
  width: 90%;
  padding: 1rem;
  background-image: url("/header.jpg");
  background-size: cover;
  background-position: center;
  color: #e5f7eb;
  transition: height 0.3s;
  z-index: 100;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`;

const HeaderText = styled.h1`
  margin-left: 1rem;
`;

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <HeaderContainer style={{ height: isScrolled ? "50px" : "100px" }}>
      <HeaderText>PlantPilot</HeaderText>
    </HeaderContainer>
  );
};

export default Header;
