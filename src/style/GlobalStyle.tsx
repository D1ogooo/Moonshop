import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 ::-webkit-scrollbar {
  width: 6.5px;
  transition: 0.3s all;
}

::-webkit-scrollbar-track {
  background-color: #2c2c31;
  border-radius: 20px;
}

::-webkit-scrollbar-thumb {
  background-color: #08BA92;
  border-radius: 10px;
}
 
 html {
  scroll-behavior: smooth;
 }

 * {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
 }

 body {
  background: #151718;
 }
`