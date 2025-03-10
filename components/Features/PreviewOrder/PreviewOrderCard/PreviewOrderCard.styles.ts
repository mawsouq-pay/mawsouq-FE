import styled from "styled-components";
import { colors } from "@/constants/theme";
import { media } from "@/helpers/mediaQueryHelper";
export const Wrapper = styled.div`
	display: flex;
	flex: 1;
	width: 100%;
	height: 100%;
	${media.below925`
		flex-direction: column;
		height: auto;
    `}
`;

export const LeftPanel = styled.div`
	background: ${colors.green};
	/* color: white; */
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px;

	${media.below925`
	width: 100%;
	flex: none;
	padding: 15px;  
	height:400px
	`}
`;

export const MawsouqBrand = styled.div`
	text-align: center;
	margin-top: 30px;

	${media.below925`
		margin-top: 15px;
		margin-bottom: 10px;
	`}
`;

export const ProgressBar = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	flex: 1;
	height: 100%;
`;

export const BigArrow = styled.div`
	display: flex;
	${media.below925`
		display: none;
	`}
`;

export const ProgressStep = styled.div<{ completed: boolean }>`
	display: flex;
	gap: 10px;
	color: ${({ completed }) => (completed ? "white" : colors.lightGray)};
	font-size: 14px;
	${media.below925`
	font-size: 12px;

	`}
`;

export const RightPanel = styled.div`
	flex: 1.6;
	background: white;
	padding: 30px;
	display: flex;
	flex-direction: column;
	align-items: center;
	${media.below925`
	width: 100%;
	padding: 15px;

	`}
`;

export const OrderDetailsCard = styled.div`
	background: #fff;
	box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
	border-radius: 8px;
	padding: 20px;
	width: 100%;
	max-width: 500px;
	margin-bottom: 20px;

	${media.below925`
	padding: 15px;

	`}
`;

export const DetailRow = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 2px 0;

	${media.below925`
	flex-direction: column;
		gap: 5px;

	`}
`;

export const HighlightText = styled.span`
	/* font-weight: bold;
	color: ${colors.green}; */
`;

export const ButtonDiv = styled.div`
	@media (min-width: 925px) {
		display: none;
	}
`;
