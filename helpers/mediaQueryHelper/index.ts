import { screenSizes } from "@/constants/screenSizes";
import { css } from "styled-components";

export const media = {
	mobile: (styles: TemplateStringsArray | string) => css`
		@media (max-width: ${screenSizes.mobile}) {
			${styles}
		}
	`,
	tablet: (styles: TemplateStringsArray | string) => css`
		@media (max-width: ${screenSizes.tablet}) {
			${styles}
		}
	`,
	laptop: (styles: TemplateStringsArray | string) => css`
		@media (max-width: ${screenSizes.laptop}) {
			${styles}
		}
	`,
	desktop: (styles: TemplateStringsArray | string) => css`
		@media (max-width: ${screenSizes.desktop}) {
			${styles}
		}
	`,
	largeDesktop: (styles: TemplateStringsArray | string) => css`
		@media (max-width: ${screenSizes.largeDesktop}) {
			${styles}
		}
	`,
	below925: (styles: TemplateStringsArray | string) => css`
		@media (max-width: 925px) {
			${styles}
		}
	`,
};
