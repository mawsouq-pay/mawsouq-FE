import styled from "styled-components";

export const MainWrapper = styled.div`
	display: flex;
	flex-direction: row;
`;
export const StepContainer = styled.div<{ active?: boolean }>(({ active }) => ({
	display: "flex",
	alignItems: "flex-start",
	gap: "16px",
	opacity: active ? 1 : 0.5,
}));

export const StepContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
`;

export const ImageWrapper = styled.div`
	display: flex;
	justify-content: row;
	flex: 1;
	justify-content: flex-end;
`;
