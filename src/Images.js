import styled, { keyframes } from "styled-components";

const Images = (props) => {
  const images = props.images.map((image) => (
    <ListElement key={image.id}>
      <Img
        src={`https://www.artic.edu/iiif/2/${image.image_id}/full/843,/0/default.jpg`}
        alt={image.thumbnail?.alt_text}
      />

      <TextImage>{image.title}</TextImage>
    </ListElement>
  ));
  return <List>{images}</List>;
};

const Img = styled.img`
  width: 80%;
`;

const ListElement = styled.li`
  width: 90%;
  margin: auto;
  list-style-type: none;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const TextImage = styled.h4`
  margin-top: 20px;
  width: 80%;
`;

const scroll = keyframes`
    to {
        top: 75vh;
    }
`;

const List = styled.ul`
  width: 100%;
  top: 100vh;
  position: absolute;
  animation: ${scroll} 2s ease forwards;
  background-color: #282c34;
`;

export default Images;
