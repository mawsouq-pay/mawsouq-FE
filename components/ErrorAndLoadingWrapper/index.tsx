import React from "react";
import Image from "next/image";
import MSText from "../MSText";
import { Wrapper, MessageWrapper } from "./ErrorAndLoadingWrapper.styles";
import { ErrorAndLoadingWrapperProps } from "./types";
import MSLoader from "../MSLoader";

const ErrorAndLoadingWrapper = ({
	isLoading = false,
	error = null,
	errorMessage = "Something went wrong.",
	errorImageSrc = "/assets/images/default_error.png",
	loadingComponent = <MSLoader />,
	children,
}: ErrorAndLoadingWrapperProps) => {
	if (isLoading) {
		return <Wrapper>{loadingComponent}</Wrapper>;
	}

	if (error) {
		return (
			<Wrapper>
				{/* <Image src={errorImageSrc} alt="Error" width={150} height={150} /> */}
				<MessageWrapper>
					<MSText fontSize="16px" fontWeight="500" color="red">
						{errorMessage}
					</MSText>
				</MessageWrapper>
			</Wrapper>
		);
	}

	return <>{children}</>;
};

export default ErrorAndLoadingWrapper;
