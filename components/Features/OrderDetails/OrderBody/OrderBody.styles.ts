import styled from "styled-components";
import { media } from "@/helpers/mediaQueryHelper";

export const ProgressWrapper = styled.div`
	display: flex;
`;

export const ProgressSection = styled.div`
	flex: 2;
`;

export const HistorySection = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	border-radius: 8px;
	margin-top: 12px;
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
	gap: 10px;
	margin-top: 25px;
`;
