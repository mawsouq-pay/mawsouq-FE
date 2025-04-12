import styled from "styled-components";

export const Section = styled.section`
	background-color: #f9fafb;
	padding: 80px 0;
`;

export const Container = styled.div`
	max-width: 1100px;
	margin: 0 auto;
	padding: 0 24px;
`;

export const TextBlock = styled.div`
	max-width: 800px;
	margin: 0 auto;
	line-height: 1.8;
`;

export const TeamGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
	gap: 32px;
	margin-top: 32px;
`;

export const TeamCard = styled.div`
	background: white;
	border-radius: 16px;
	padding: 24px;
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
	text-align: center;
`;

export const ProfilePic = styled.div`
	width: 96px;
	height: 96px;
	position: relative;
	margin: 0 auto;
	overflow: hidden;
`;
