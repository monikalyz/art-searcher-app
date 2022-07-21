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

  @media (orientation: landscape) {
    max-width: 80vh;
    margin: auto;
    margin-bottom: 70px;
  }
`;

const TextImage = styled.h4`
  margin-top: 20px;
  width: 80%;

  @media (orientation: landscape) {
    display: block;
    font-size: 24px;
  }
`;

const scroll = keyframes`
    to {
        top: 75vh;
    }
`;

const scrolling = keyframes`
    to {
            top: 100vh;
        }
`;

const List = styled.ul`
  width: 100%;
  top: 100vh;
  position: absolute;
  animation: ${scroll} 2s ease forwards;
  background-color: #282c34;

  @media (orientation: landscape) {
    top: 100vh;
    animation: ${scrolling} 2s ease forwards;
  }
`;

export default Images;
