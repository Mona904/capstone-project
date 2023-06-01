import React from "react";
import Header from "@/components/Header";
import PlantList from "@/components/PlantList";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 70px;
`;

const PageHeader = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: #e5f7eb;
  color: #000;
  z-index: 10;

  div {
    display: flex;
    align-items: center;
  }

  span {
    margin-right: 0.5rem;
    cursor: pointer;
  }

  ul {
    position: absolute;
    top: calc(100% + 0.5rem);
    left: 0;
    display: flex;
    flex-direction: column;
    list-style-type: none;
    padding: 0;
    margin: 0;
    background-color: #e5f7eb;
    border-radius: 4px;
    z-index: 1;
  }

  li {
    cursor: pointer;
    padding: 0.5rem;
    transition: background-color 0.3s;
  }

  li:hover {
    background-color: darkgreen;
    color: #fff;
  }

  @media (max-width: 480px) {
    /* Adjust the breakpoint value as needed */
    ul {
      position: absolute;
      top: 100%;
      left: 0;
      background-color: #e5f7eb;
      border-radius: 4px;
      padding: 0.5rem;
    }
  }
`;

export default function HomePage({ plants, toggleFavorite }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState({
    id: 1,
    name: "Hamburg",
  });

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const handleLocationChange = (location) => {
    setSelectedLocation(location);
    setIsDropdownOpen(false);
  };

  return (
    <>
      <Header />
      <Container>
        <PageHeader>
          <div>
            <span>📍</span>
            <span>{selectedLocation.name}</span>
            <span onClick={toggleDropdown}>☰</span>
            {isDropdownOpen && (
              <ul>
                <li
                  onClick={() =>
                    handleLocationChange({ id: 1, name: "Hamburg" })
                  }
                >
                  Hamburg
                </li>
                <li
                  onClick={() =>
                    handleLocationChange({ id: 2, name: "Munich" })
                  }
                >
                  Munich
                </li>
                <li
                  onClick={() =>
                    handleLocationChange({ id: 3, name: "Cologne" })
                  }
                >
                  Cologne
                </li>
              </ul>
            )}
          </div>
        </PageHeader>
        <h2>Plants in my region</h2>
        <Link href="/favorites"></Link>
        <PlantList plants={plants} toggleFavorite={toggleFavorite} />
      </Container>
      <Footer />
    </>
  );
}
