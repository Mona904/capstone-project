
import PlantCard from './PlantCard';
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  padding-left: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;

  li {
    width: 10rem;
    min-width: 5rem;
    height: 10rem;
  }
`;
function PlantList(props) {
  const { plants } = props;

  return (
    <List>

      {plants.map(plant => (
        <li key={plant.id}><PlantCard  name={plant.name} image={plant.image} /> </li>
      ))}
    </List>
  );
}

export default PlantList;

