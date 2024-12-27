import styled from "styled-components";

export const Wrapper = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding-inline: clamp(20px, 5vw, 84px);
	gap: 80px;
`;

export const TitleWrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	padding-top: 10px;

	text-align: center;
	gap: 10px;
`;

export const StepsAndImagesWrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	width: "100%";
	padding-inline-start: 60px;
`;
