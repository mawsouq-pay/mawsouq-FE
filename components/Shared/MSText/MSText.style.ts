import styled from "styled-components";

export const Text = styled.p<{
	fontSize?: string;
	fontWeight?: string;
	fontStyle?: string;
}>`
	font-family: "Inter", sans-serif;
	font-size: ${({ fontSize }) => fontSize || "16px"};
	font-weight: ${({ fontWeight }) => fontWeight || "400"};
	font-style: ${({ fontStyle }) => fontStyle || "normal"};
	color: ${({ color }) => color || "inherit"};
	margin: 0;
`;
