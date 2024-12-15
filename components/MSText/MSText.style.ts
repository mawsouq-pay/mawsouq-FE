import styled from "styled-components";
import { colors } from "@/constants/theme";
import { createGlobalStyle } from "styled-components";

export const Text = styled.p<{
  fontWeight?: string;
  fontSize?: string;
  color?: string;
}>`
  color: ${({ color }) => color || colors.black};
  font-weight: ${({ fontWeight }) => fontWeight || "normal"};
  font-size: ${({ fontSize }) => fontSize || "16px"};
  margin: 0;
  font-family: ProximaNova;
`;
export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Poppins';
    src: local('Poppins'),
      url(../../assets/fonts/proximaNova/ProximaNova_Regular.ttf) format('truetype');
  }

  @font-face {
    font-family: 'Poppins';
    src: local('Poppins'),
      url(../../assets/fonts/proximaNova/ProximaNova_Semi_Bold.ttf) format('truetype');
    font-weight: 600;
  }

  @font-face {
    font-family: 'Poppins';
    src: local('Poppins'),
      url(../../assets/fonts/proximaNova/ProximaNova_Bold.ttf) format('truetype');
    font-weight: bold;
  }

  @font-face {
    font-family: 'Poppins';
    src: local('Poppins'),
      url(../../assets/fonts/proximaNova/ProximaNova-Italic.ttf) format('truetype');
    font-style: italic;
  }

  @font-face {
    font-family: 'Poppins';
    src: local('Poppins'),
      url(../../assets/fonts/proximaNova/ProximaNova-BoldItalic.ttf) format('truetype');
    font-weight: bold;
    font-style: italic;
  }
`;
