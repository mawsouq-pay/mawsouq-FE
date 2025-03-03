import { colors } from "@/constants/theme";
import { styled } from "styled-components";

export const HeroContainer = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	flex-direction: column;
	min-height: 80vh;
	border-radius: 10px;
	/* background: linear-gradient(to top, #b3fcdf, #ffffff); */
	padding: 5rem 2rem 0rem 2rem;

	@media (max-width: 768px) {
		padding: 2rem;
		min-height: 60vh;
		/* align-items: flex-start;
		justify-content: center;
		text-align: center;
		flex-direction: column; */
	}
`;

export const HeroContent = styled.div`
	max-width: 700px;
	margin-top: 1rem;
`;

export const HeroImage = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 600px;
	height: auto;

	@media (max-width: 1024px) {
		width: 450px;
	}

	@media (max-width: 768px) {
		width: 320px;
	}
`;

export const IframeOverlay = styled.iframe`
	/* position: absolute;
	top: 20%;
	left: 13.3%;
	width: 72%;
	height: 58%;
	border: none;
	border-radius: 10px; */
	margin-top: 20px;
	border: 5px solid black;
	border-radius: 20px;
	@media (max-width: 1024px) {
		/* top: 18%;
		left: 12%;
		width: 76%;
		height: 55%; */
	}

	@media (max-width: 768px) {
		/* top: 17%;
		left: 10%;
		width: 80%;
		height: 70%; */
	}
`;

export const HeroTitle = styled.h1`
	font-size: 3.5rem;
	font-weight: bold;
	color: #222;
	margin-bottom: 1rem;

	@media (max-width: 768px) {
		font-size: 2.3rem;
	}
`;

export const HeroSubtitle = styled.p`
	font-size: 18px;
	color: #444;
	line-height: 1.6;
	margin-bottom: 1.5rem;

	@media (max-width: 768px) {
		font-size: 1.2rem;
	}
`;

export const HeroButton = styled.button`
	/* background-color: black; */
	background: linear-gradient(to left, #01796f, #43d9a4);
	color: white;
	font-size: 1rem;
	font-weight: bold;
	padding: 20px 28px;
	border: none;
	border-radius: 20px;
	cursor: pointer;
	transition: 0.3s ease-in-out;

	/* &:hover {
		background-color: ${colors.buttonGreenHover};
	} */
`;

export const NavbarContainer = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: #111;
	padding: 5px 20px;
	border-radius: 10px;
	width: fit-content;
	margin: 20px auto 40px auto;
	box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

	@media (max-width: 768px) {
		width: 100%;
		padding: 5px 10px;
		justify-content: center;
	}
`;

export const NavItems = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
`;

export const NavItem = styled.div`
	color: white;
	font-size: 14px;
	cursor: pointer;
	&:hover {
		opacity: 0.8;
	}
`;

export const LoginButton = styled.button`
	background: white;
	color: black;
	font-size: 14px;
	font-weight: bold;
	padding: 3px 10px;
	border: none;
	border-radius: 10px;
	cursor: pointer;
	transition: 0.3s ease-in-out;
	margin-left: 20px;
	&:hover {
		background: #ddd;
	}
`;
