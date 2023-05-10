import styled from "styled-components";
import Image from "next/image";

const StyledImage = styled(Image)`
width: 100%;
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
padding: 3px;`
function PlantCard(props) {
  const { name, image } = props;

  return (
    <Container>
      <Image src={image} alt={name} />
      <Title>{name}</Title>
    </Container>
  );
}

export default PlantCard;
