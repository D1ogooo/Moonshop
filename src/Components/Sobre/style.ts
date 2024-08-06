import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
`;

export const SobreStyle = styled.div`
  margin-top: 5rem;
  width: 100%;
  min-height: 37.5rem;
  background-color: #151718;
  display: flex;
  justify-content: center;
`;

export const Content = styled.section`
  width: 90%;
  margin: 0 auto;
  max-width: 75rem;
  padding: 1.25rem;
  box-sizing: border-box;
  border: solid 0.0625rem #272727;
  border-radius: 0.625rem;
  box-shadow: 0.0625rem 0rem 2.9375rem -1.125rem rgba(0, 0, 0, 0.2);
`;

export const Left = styled.div`
  width: 30%;
  border-radius: 1.25rem;
  img {
    width: 100%;
    height: auto;
    max-width: 15.625rem;
    border-radius: 10%;
  }
`;

export const Right = styled.div`
  width: 70%;
  padding: 0 1.25rem;

  h1 {
   text-align: center;
   font-family: "Baloo 2";
   font-size: 1.3rem;
   color: #fff;
   font-weight: 600;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
    max-height: 20rem; 
    overflow-y: auto;
  }
`;

export const Conteudo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 0 auto;
  max-width: 75rem;
  padding: 1.25rem;
  box-sizing: border-box;
  border: solid 0.0625rem #272727;
  border-radius: 0.625rem;
  box-shadow: 0.0625rem 0rem 2.9375rem -1.125rem rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const TitleSobre = styled.h1`
  text-align: center;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  font-family: "Baloo 2";
  font-size: 2.5rem;
  color: #fff;
  font-weight: 600;
  span {
    color: #08ba92;
  }
`;

export const Paragraph = styled.p`
  text-align: center;
  font-family: "Space Grotesk", sans-serif;
  color: #959597;
  font-size: 0.8562rem;
  max-width: 100%;
`;

export const HR = styled.hr`
  margin: 0 auto;
  width: 50%;
  margin-bottom: 1rem;
  border: none;
  height: 1px;
  background: #272727;
`;