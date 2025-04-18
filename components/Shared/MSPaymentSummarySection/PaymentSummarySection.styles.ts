import styled from "styled-components";

export const MainWrapper = styled.div`
	border-radius: 20px;
	margin-top: 12px;
	margin-bottom: 12px;
	display: flex;
	flex-direction: column;
	gap: 16px;
	justify-content: space-between;
	flex: 1;
`;
export const ItemsContainer = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
`;
export const ItemWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	padding-bottom: 8px;
`;

export const LabelValue = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
`;
export const TextValue = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	width: auto;
	margin: 0;
`;

export const TotalWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 10px;
`;
