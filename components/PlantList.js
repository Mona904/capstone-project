
import PlantCard from './PlantCard';
import styled from "styled-components";
import useSWR from "swr"; 

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
/*function PlantList(props) {
  const { plants } = props;

  return (
    <List>
      {plants.map((plant) => (
        <li key={plant.id}>
          <PlantCard
            name={plant.name}
            image={plant.image}
            onClick={() => navigateToPlantDetails(plant.id)}
          />
        </li>
      ))}
    </List>
  );
}
*/
export const fetcher = async (...args) => {
  const response = await fetch(...args);
  if (!response.ok) {
    throw new Error(`Request with ${JSON.stringify(args)} failed.`);
  }
  return await response.json();
};

function PlantList (){
  const {data: plants, error, isLoading} = useSWR("/api/Plants", fetcher);
  if (error){
    return (<p>Error!</p>)
  }
  if (isLoading)
   {return <p>Loading...</p>
}
return (<List>
  {plants.map((plant, index) => (
    <li key={index}>
      <PlantCard
        name={plant.title}
        // image={plant.image}
        onClick={() => navigateToPlantDetails(plant.id)}
      />
    </li>
  ))}
</List>)
}

export default PlantList;

