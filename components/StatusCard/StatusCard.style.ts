import styled from "styled-components";
import { colors } from "@/constants/theme"
import { media } from "@/helpers/mediaQueryHelper";

export const MainWrapper = styled.div`
    background-color: ${colors.white};
    border-radius:16px ;
    gap:20px;
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:flex-start;
    padding: 15px  25px;
`;
export const FlexEnd = styled.div`
     margin-left: auto;
`