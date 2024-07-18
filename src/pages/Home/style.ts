import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  min-height: 100vh; /* Mínimo de altura para cobrir a tela inteira */
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const VideoOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-color: rgba(0, 0, 0, 0.9);
  mix-blend-mode: overlay;
`;

export const VideoBackground = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Content = styled.div`
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%; 
  color: #fff;
  h1 {
   text-align: center;
   font-family: "Space Grotesk", sans-serif;
   font-size: 3rem;
   font-weight: 800;
   line-height: 130%;
   color: #fff;
  }

  p {
   font-family: "Space Grotesk", sans-serif;
   color: #C4C4C5;
   font-size: 15px;
  }
`;

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
`;

export const Planos = styled.div`
  
`;
