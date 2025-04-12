import styled from "styled-components";
import { colors } from "@/constants/theme";

export const FooterWrapper = styled.footer`
	background-color: ${colors.gray900};
	padding: 50px 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 25px;
	border-top: 1px solid ${colors.lightGray};
	text-align: center;
	width: 100%;
`;

export const FooterContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
	width: 100%;
	max-width: 1200px;
`;

export const Logo = styled.img`
	width: 150px;
	margin-bottom: 15px;
`;

export const SocialLinks = styled.div`
	display: flex;
	gap: 20px;

	a {
		display: flex;
		align-items: center;
		justify-content: center;
		color: ${colors.white};
		text-decoration: none;
		transition: 0.3s;

		&:hover {
			color: ${colors.darkGreen};
		}
	}
`;

export const FooterLinks = styled.div`
	display: flex;
	gap: 15px;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;

	a {
		color: ${colors.white};
		text-decoration: none;
		font-weight: 500;
		font-size: 16px;

		&:hover {
			text-decoration: underline;
		}
	}
`;

export const FooterText = styled.p`
	color: ${colors.gray};
	font-size: 14px;
	margin: 0;
`;
