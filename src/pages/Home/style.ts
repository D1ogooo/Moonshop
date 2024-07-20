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
   font-size: 48px;
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
  .precoProduto {
    margin-left: -140px;
    color: #fff;
text-align: right;
/* Text/Regular S */
font-family: "Space Grotesk", sans-serif;
font-size: 1rem;
font-style: normal;
font-weight: 600;
line-height: 130%; /* 1.1375rem */
    span {
      color: #fff;
/* Title/Title M */
font-family: "Baloo 2";
font-size: 1.5rem;
font-style: normal;
font-weight: 800;
line-height: 130%;
    }
  }
  .faleConosco {
   margin-top: 35px;
   font-family: "Baloo 2";
   font-size: 18px;
   text-decoration: underline;
   color: #656A6E;
   font-weight: 490;
 }
`;

export const ContainerTitle = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;

 h1 {
  margin-top: 2rem;
 }
`

export const Planos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 64px;
  h2 {
   text-align: center;
   margin-top: 64px;
   margin-bottom: 64px;
   font-size: 40px;
   font-family: "Open Sans", sans-serif;
   font-weight: 600;
   color: #fff;
  }
  
  section {
   width: 25rem;
   height: 31.25rem;
   border: solid 1px #272727;
   border-radius: 10px;
  }
`;

export const CardPai = styled.div`
 display: flex;
 flex-wrap: wrap;
 gap: 50px;
`

export const Card = styled.section`
 box-shadow: 1px 0px 47px -18px rgba(0,0,0,0.33);
 h1 {
  text-align: center;
  /* margin-top: 40px; */
  margin-bottom: 16px;
  font-family: "Space Grotesk", sans-serif;
  font-size: 1.5rem;
  color: #fff;
 }

 p {
  font-family: "Roboto", sans-serif;
  color: #C4C4C5;
  font-size: 16px;
  margin-top: 1rem;
 }

 hr {
  background: #262829;
  margin: 0 auto;
  height: .0625rem;
  border: none;
 }

 .sobreOcurso {
  text-align: center;
  width: 100%;
  height: auto;
  margin-top: .9rem;
  font-family: "Space Grotesk", sans-serif;
  color: #C4C4C5;
  font-size: 14.4px;
 }

`

export const Conteudo = styled.div`
 margin-top: 2rem;
 p {
  color: #656A6E;
  font-size: 15px;
  font-family: "Space Grotesk", sans-serif;
  font-weight: 500;
 }
`

export const CompreAgora = styled.button`
 box-shadow: 1px 0px 47px -18px rgba(0,0,0,0.33);
 width: 170px;
 height: 50px;
 background: none;
 border: none;
 cursor: pointer;
 display: flex;
 justify-content: center;
 align-items: center;
 margin-top: 1.9rem;
 background-color: #09b691;
 border-radius: 10px;

 &:hover {
  background-color: #079778;
  transition: .3s all;
 }
 p {
  text-align: center;
  color: #fff;
  font-size: 17px;
  margin-top: -0.0063rem;
  font-weight: 600;
  font-family: "Space Grotesk", sans-serif;
 }

 img {
  width: 55px;
  height: 55px;
  background: none;
  border: none;
 }
`

