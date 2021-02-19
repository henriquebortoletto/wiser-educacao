import styled from "styled-components";

export const Background = styled.section`
  background-image: url(/img/imagem.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
  position: relative;
  grid-column: 1/2;

  @media (max-width: 650px) {
    grid-column: auto;
    position: absolute;
    z-index: -1;
  }
`;
export const BackgroundOverlay = styled.div`
  background-image: linear-gradient(to top, #130525, rgba(105, 57, 153, 0));
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
`;
