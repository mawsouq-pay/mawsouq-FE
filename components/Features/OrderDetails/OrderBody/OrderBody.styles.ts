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
	margin-top: 30px;
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

export const TopSection = styled.div`
	display: flex;
	flex-direction: column;
	gap: 40px;
`;
