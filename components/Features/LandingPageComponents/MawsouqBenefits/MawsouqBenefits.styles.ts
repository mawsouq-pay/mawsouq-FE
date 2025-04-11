import styled from "styled-components";

export const BenefitsContainer = styled.div`
	text-align: center;
	padding: 30px 20px 20px 20px;
	/* background: white; */
	border-radius: 40px;
	/* margin-top: 50px; */
	/* background-color: #ecf9ee; */
	margin-top: 30px;
`;

export const BenefitsGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	justify-content: space-between;
	gap: 20px;
	/* max-width: 1000px; */
	margin: 0 20px;
	//

	@media (max-width: 768px) {
		grid-template-columns: repeat(1, 1fr);

		flex-direction: column;
		align-items: center;
	}
`;

export const BenefitItem = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	text-align: start;
	padding: 30px 20px;
	min-height: 200px;
	border-radius: 12px;
	outline: 1px solid #ddf8ed;
	box-shadow: 0 4px 8px #ddf8ed;
	transition: 0.3s ease-in-out;
	background-color: white;

	&:hover {
		transform: translateY(-5px);
	}
	@media (max-width: 768px) {
		flex-direction: column;
		align-items: center;
	}
`;

export const BenefitIcon = styled.div`
	display: flex;
	margin-bottom: 10px;
	flex-direction: column;
	width: 100%;
	justify-content: flex-start;
`;
