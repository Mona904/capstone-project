import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";
import PlantList from "@/components/PlantList";

const Header = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 1rem;
`;

const LocationContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const LocationSymbol = styled.span`
  font-size: 1.5rem;
  margin-right: 0.5rem;
`;

const LocationText = styled.span`
  font-size: 1rem;
`;

const HamburgerMenu = styled.span`
  font-size: 1.5rem;
  cursor: pointer;
`;

const DropdownMenu = styled.ul`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #fff;
  border-radius: 0.5rem;
  padding: 0.5rem 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  z-index: 2;
`;

const DropdownItem = styled.li`
  padding: 0.5rem 1rem;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
  }
`;

const ViewFavoritesButton = styled.button`
  background-color: #0f3610;
  color: #e5f7eb;
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;
  border-radius: 1rem;
`;

const locations = [
  { id: 1, name: "Hamburg" },
  { id: 2, name: "Munich" },
  { id: 3, name: "Cologne" },
];

export default function HomePage({ plants, toggleFavorite }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const handleLocationChange = (location) => {
    setSelectedLocation(location);
    setIsDropdownOpen(false);
  };

  return (
    <div>
      <Header>
        <LocationContainer>
          <LocationSymbol>&#x1F4CD;</LocationSymbol>
          <LocationText>{selectedLocation.name}</LocationText>
          <HamburgerMenu onClick={toggleDropdown}>&#x2630;</HamburgerMenu>
          {isDropdownOpen && (
            <DropdownMenu isOpen={isDropdownOpen}>
              {locations.map((location) => (
                <DropdownItem
                  key={location.id}
                  onClick={() => handleLocationChange(location)}
                >
                  {location.name}
                </DropdownItem>
              ))}
            </DropdownMenu>
          )}
        </LocationContainer>
      </Header>
      <h2>Plants in my region</h2>
      <Link href="/favorites">
        <ViewFavoritesButton>View Favorites</ViewFavoritesButton>
      </Link>
      <PlantList plants={plants} toggleFavorite={toggleFavorite} />
    </div>
  );
}
