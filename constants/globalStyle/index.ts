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
  }

  body {
    font-family: Arial, sans-serif;
  }

  #__next {
    height: 100%; 
  }
`;
