import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    background: #fff; 
    margin: 0;
    padding: 0;
  }
  html, body, #__next {
    height: 100%;
    margin: 0;
    padding: 0;
}



  #__next {
    height: 100%; 
  }
`;
