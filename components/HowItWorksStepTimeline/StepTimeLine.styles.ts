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
	transform: active ? "scale(1.1)" : "scale(1)",
	boxShadow: active ? "0px 4px 10px rgba(0, 0, 0, 0.2)" : "none",
	backgroundColor: active ? "rgba(52, 152, 219, 0.1)" : "transparent",
	borderRadius: "8px",
	transition: "all 0.3s ease-in-out",
	padding: "10px",
	zIndex: active ? 2 : 1,
	position: "relative",
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
