import styled from "styled-components";
import { colors } from "@/constants/theme";

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
