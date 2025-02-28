import styled from "styled-components";

export const BenefitsContainer = styled.div`
	text-align: center;
	padding: 4rem 2rem;
	background: white;
`;

export const BenefitsGrid = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 20px;
	max-width: 1000px;
	margin: 0 auto;
	margin-top: 50px;

	@media (max-width: 768px) {
		flex-direction: column;
		align-items: center;
	}
`;

export const BenefitItem = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	padding: 20px;
	//background: #f9f9f9;
	border-radius: 12px;
	outline: 1px solid #ddf8ed;
	box-shadow: 0 4px 8px #ddf8ed;
	transition: 0.3s ease-in-out;

	&:hover {
		transform: translateY(-5px);
	}
`;

export const BenefitIcon = styled.div`
	margin-bottom: 10px;
`;

export const BenefitTitle = styled.h3`
	font-size: 1.2rem;
	font-weight: bold;
	color: #111;
	margin-bottom: 5px;
`;

export const BenefitDescription = styled.p`
	font-size: 1rem;
	color: #555;
	line-height: 1.5;
`;
