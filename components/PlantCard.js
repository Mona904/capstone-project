import styled from "styled-components";
import Image from "next/image";

const StyledImage = styled(Image)`
object-fit: cover;
`;

const Container = styled.article`
height: 100%;
width: 100%;
position: relative;
`;


const Title = styled.h2`
position: absolute;
bottom: -1px;
margin: 0;
background-color: #fff;
width: 100%;
padding: 2px;
font-size: 1rem;`

function PlantCard(props) {
  const { name, image } = props;

  return (
    <Container>
      <StyledImage src={image} alt={name} 
      fill 
      sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"/>
      <Title>{name}</Title>
    </Container>
  );
}

export default PlantCard;
