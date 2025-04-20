import styled from "styled-components";
import MSButton from "@/components/Shared/MSButton";
import { Box } from "@mui/material";

export const ModalContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 24px;
`;

export const OTPWrapper = styled(Box)`
	margin: 16px 0;
	display: flex;
	justify-content: center;
	gap: 8px;
`;

export const SubmitButton = styled(MSButton)`
	width: 100%;
	margin-top: 24px;
`;
