import styled from "styled-components";
import { colors } from "@/constants/theme";
import { media } from "@/helpers/mediaQueryHelper";

export const ProgressWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	margin-bottom: 20px;
`;

export const ProgressSection = styled.div`
	flex: 2;
`;

export const HistorySection = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	border-radius: 8px;
`;

export const MainWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	gap: 20px;
	margin-top: 50px;
	${media.below925`
 	flex-direction: column;
  `}
`;

export const InfoSection = styled.div`
	flex: 2;
	display: flex;
	flex-direction: column;
	gap: 20px;
`;

export const ActionBox = styled.div`
	display: flex;
	width: fit-content;
	background-color: #ffebee;
	border: 1px solid #f44336;
	color: #b71c1c;
	padding: 5px;
	border-radius: 8px;
	text-align: center;

	margin-top: 10px;
	margin-bottom: 30px;
`;
export const CollapsibleContainer = styled.div`
	width: 100%;
	margin-top: 20px;
`;

export const Header = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 15px;
	border-bottom: 5px solid ${colors.green};
	cursor: pointer;
`;

export const ArrowIcon = styled.span<{ isOpen: boolean }>`
	transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0deg)")};
	transition: transform 0.3s ease-in-out;
	font-size: 16px;
	color: ${colors.darkGray};
`;

export const Content = styled.div<{ isOpen: boolean }>`
	display: flex;
	gap: 30px;
	max-height: ${({ isOpen }) => (isOpen ? "1500px" : "0px")};
	overflow: hidden;
	transition:
		max-height 0.4s ease-in-out,
		opacity 0.4s ease-in-out;
	opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
	padding: ${({ isOpen }) => (isOpen ? "15px" : "0px")};
	flex-direction: column;
	/* ${media.below925`
		flex-direction: column;
	`} */
`;
