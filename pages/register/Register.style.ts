import { colors } from "@/constants/theme";
import styled from "styled-components";

export const GradientBackground = styled.div`
	background: linear-gradient(#1e1e1e, #2a75d4);
	display: flex;
	overflow: visible;
	position: relative;
	align-items: center;
	justify-content: center;
	height: 70vh;
	border-radius: 15px;
	box-sizing: border-box;
	z-index: 1;
	width: 100%;
`;

export const PageContainer = styled.div`
	height: 100vh;
`;

export const Card = styled.div`
	position: relative;
	z-index: 10;
	border-radius: 20px;
	background-color: #fff;
	box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
	text-align: center;
	margin-top: 400px;
`;

export const MobileGradientBackground = styled.div`
	background: linear-gradient(to right, #1e1e1e, #2a75d4);
	display: flex;
	align-items: center;
	justify-content: center;
	height: 30vh;
	padding: 10px;
	border-radius: 15px;
	box-sizing: border-box;
`;

export const CardTitle = styled.h4`
	font-family: "Poppins", sans-serif;
	font-weight: 800;
	color: #1e1e1e;
`;

export const CardSubtitle = styled.p`
	text-align: center;
	margin-bottom: 30px;
	font-weight: 400;
	color: #1e1e1e;
`;

export const InputLabel = styled.label`
	font-family: "Poppins", sans-serif;
	font-size: 16px;
	color: #75859e;
	text-align: left;
	display: block;
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 20px;
`;

export const Row = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 20px;
`;

export const HalfWidth = styled.div`
	width: 48%;
`;

export const StyledButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	align-self: flex-end;
	background: ${colors.buttonGreenBackground};
	color: white;
	width: 100%;
	padding: 15px 18px;
	border: none;
	cursor: pointer;
	border-radius: 8px;
	margin-top: 16px;
	border-radius: 12px;

	&:hover {
		background: ${colors.buttonGreenHover};
	}
`;

export const Divider = styled.div`
	display: flex;
	align-items: center;
	text-align: center;
	margin: 20px 0;
	color: #75859e;

	&::before,
	&::after {
		content: "";
		flex: 1;
		border-bottom: 1px solid #ccc;
	}

	&::before {
		margin-right: 10px;
	}

	&::after {
		margin-left: 10px;
	}
`;

export const SocialButtons = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: row;
	gap: 15px;
`;

export const SocialButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 10px;
	border-radius: 15px;
	border: 1px solid #75859e;
	color: #75859e;
	background: none;
	cursor: pointer;
	width: 300px;
	font-size: 16px;
  padding: 12px;

	&:hover {
		background-color: #75859e;
		color: white;
	}
`;
export const LoginText = styled.p`
	margin-top: 20px;
	font-size: 14px;
	color: #75859e;
`;

export const LoginLink = styled.a`
	color: #2a75d4;
	font-weight: 500;
	text-decoration: none;
	cursor: pointer;
`;
