import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: inherit;
  }

  html, body, #__next {
    height: 100%;
    margin: 0;
    padding: 0;
    background: #fff;
    font-family: inherit;
  }

  button,
  input,
  textarea,
  select,
  optgroup,
  label,
  a,
  p,
  span,
  div,
  th,
  td {
    font-family: inherit;
  }
`;
