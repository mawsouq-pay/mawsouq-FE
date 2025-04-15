import React from "react";
import {
	Wrapper,
	MessageWrapper,
	ErrorMessageBox,
} from "./ErrorAndLoadingWrapper.styles";
import { ErrorAndLoadingWrapperProps } from "./types";
import { ErrorTriangleIcon } from "@/assets/icons";
import { colors } from "@/constants/theme";
import { extractErrorMessage } from "@/hooks/errorHooks";
import { useLocaleStore } from "@/store/LocaleStore";
import { textTr } from "@/constants/locales";
import MSLoader from "../MSLoader";
import MSText from "../MSText";
const MSErrorAndLoadingWrapper = ({
	isLoading = false,
	error = null,
	errorMessage,
	ErrorIcon,
	loadingComponent = <MSLoader />,
	children,
	errorButton,
	displayErrorReason = false,
}: ErrorAndLoadingWrapperProps) => {
	const { locale } = useLocaleStore();
	const text = textTr(locale);
	const { message, details } = extractErrorMessage(error, locale);
	if (isLoading) {
		return <Wrapper>{loadingComponent}</Wrapper>;
	}

	if (error) {
		return (
			<Wrapper>
				{ErrorIcon ? <ErrorIcon /> : <ErrorTriangleIcon />}
				<MessageWrapper>
					<MSText fontSize="16px" fontWeight="bold" color={colors.error}>
						{errorMessage ?? text.refreshAndTryAgain}
					</MSText>
				</MessageWrapper>
				{displayErrorReason && (
					<ErrorMessageBox>
						<p>{message}</p>
						<p>{details}</p>
					</ErrorMessageBox>
				)}{" "}
				{errorButton && errorButton}
			</Wrapper>
		);
	}

	return <>{children}</>;
};

export default MSErrorAndLoadingWrapper;
