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
   font-size: .9375rem;
  }
`;

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  .precoProduto {
    margin-left: -8.75rem;
    color: #fff;
text-align: right;
font-family: "Space Grotesk", sans-serif;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: 130%;
    span {
     color: #fff;
     font-family: "Baloo 2";
     font-size: 24px;
     font-style: normal;
     font-weight: 800;
     line-height: 130%;
    }
  }
  .faleConosco {
   margin-top: 2.1875rem;
   font-family: "Baloo 2";
   font-size: 1.125rem;
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
  margin-bottom: 4rem;
  h2 {
   text-align: center;
   margin-top: 5rem;
   margin-bottom: 2rem;
   font-size: 2.5rem;
   font-family: "Baloo 2";
   font-weight: 600;
   color: #fff;
  }
  
  section {
   width: 25rem;
   height: 31.25rem;
   border: solid .0625rem #272727;
   border-radius: .625rem;
  }
`;

export const CardPai = styled.div`
 display: flex;
 flex-wrap: wrap;
 gap: 3.125rem;
 justify-content: center;
`

export const Card = styled.section`
 box-shadow: .0625rem 0rem 2.9375rem -1.125rem rgba(0,0,0,0.33);
 h1 {
  text-align: center;
  /* margin-top: 2.5rem; */
  margin-bottom: 1rem;
  font-family: "Space Grotesk", sans-serif;
  font-size: 1.5rem;
  color: #fff;
 }

 p {
  font-family: "Roboto", sans-serif;
  color: #C4C4C5;
  font-size: 1rem;
  margin-top: 1rem;
 }

 hr {
  background: #262829;
  margin: 0 auto;
  height: 1px;
  border: none;
 }

 .sobreOcurso {
  text-align: center;
  width: 100%;
  height: 5rem;
  margin-top: .9rem;
  font-family: "Space Grotesk", sans-serif;
  color: #C4C4C5;
  font-size: .9rem;
 }

`

export const Conteudo = styled.div`
 margin-top: 32px;
 p {
  color: #656A6E;
  font-size: .9375rem;
  font-family: "Space Grotesk", sans-serif;
  font-weight: 500;
 }
`

export const CompreAgora = styled.button`
 box-shadow: .0625rem 0rem 2.9375rem -1.125rem rgba(0,0,0,0.33);
 width: 10.625rem;
 height: 3.125rem;
 background: none;
 border: none;
 cursor: pointer;
 display: flex;
 justify-content: center;
 align-items: center;
 margin-top: 1.9rem;
 background-color: #09b691;
 border-radius: .625rem;

 &:hover {
  background-color: #079778;
  transition: .3s all;
 }
 p {
  text-align: center;
  color: #fff;
  font-size: 1.0625rem;
  margin-top: -0.0063rem;
  font-weight: 600;
  font-family: "Space Grotesk", sans-serif;
 }

 img {
  width: 3.4375rem;
  height: 3.4375rem;
  background: none;
  border: none;
 }
`

