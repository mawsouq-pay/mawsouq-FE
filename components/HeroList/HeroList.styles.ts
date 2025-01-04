import styled from "styled-components";

export const Container = styled.div`
	background: linear-gradient(
		to right,
		rgba(255, 255, 255, 0.1) 0%,
		rgba(82, 209, 124, 0.5) 100%
	);
	border-radius: 15px;
	padding: 17px 18px;
	width: 70%;
	color: white;
	box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
	display: flex;
	flex-direction: column;
	align-self: center;
	justify-content: flex-end;
	max-height: fit-content;
`;

export const StepList = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0;
	display: flex;
	flex-direction: column;
	gap: 10px;
	margin-top: 20px;
`;

export const StepItem = styled.li<{ isActive?: boolean }>`
	display: flex;
	align-items: center;
	padding: 10px 15px;
	background: ${({ isActive }) =>
		isActive ? "white" : "rgba(255, 255, 255, 0.1)"};
	color: ${({ isActive }) => (isActive ? "#2a75d4" : "white")};
	border-radius: 10px;
	box-shadow: ${({ isActive }) =>
		isActive ? "0px 4px 8px rgba(0, 0, 0, 0.1)" : "none"};
	transition: all 0.3s ease-in-out;

	&:hover {
		background: ${({ isActive }) =>
			isActive ? "white" : "rgba(255, 255, 255, 0.2)"};
	}

	svg {
		margin-right: 10px;
		font-size: 1.5rem;
		color: ${({ isActive }) => (isActive ? "#2a75d4" : "white")};
	}
`;
