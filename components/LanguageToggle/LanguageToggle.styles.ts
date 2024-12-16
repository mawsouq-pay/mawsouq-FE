import styled from "styled-components";

export const ToggleWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100px;
	background-color: ${({ theme }) => theme.background || "#222"};
	border-radius: 20px;
	padding: 4px;
	position: relative;
	cursor: pointer;
`;

export const ToggleSlider = styled.div<{ isArabic: boolean }>`
	width: 40px;
	height: 40px;
	background-color: #fff;
	border-radius: 50%;
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	transition: transform 0.3s ease;

	${({ isArabic }) =>
		isArabic
			? "transform: translate(50%, -50%);"
			: "transform: translate(-50%, -50%);"}
`;

export const ToggleLabel = styled.span<{ isSelected: boolean }>`
	font-size: 14px;
	font-weight: bold;
	color: ${({ isSelected }) => (isSelected ? "#fff" : "#ccc")};
	z-index: 1;
`;
