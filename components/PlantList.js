import React, { useState } from "react";
import PlantCard from "./PlantCard";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  padding-left: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  background-color: #e5f7eb;

  li {
    width: 10rem;
    min-width: 5rem;
    height: 10rem;
  }
`;

const PlantList = ({ plants, toggleFavorite }) => {
  return (
    <List>
      {plants.map((plant) => (
        <li key={plant.id}>
          <PlantCard plant={plant} toggleFavorite={toggleFavorite} />
        </li>
      ))}
    </List>
  );
};

export default PlantList;
