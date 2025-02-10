import React from "react";
import MSModal from "../../../Shared/MSModal";
import { Button } from "@mui/material";
import { useAuthStore } from "@/store";
import { clientRoutes } from "@/routes";
import { useRouter } from "next/router";
import MSText from "../../../Shared/MSText";
import { colors } from "@/constants/theme";
import { OrderPreviewConfirmationPopUpProps } from "./types";
import { useLocaleStore } from "@/store/LocaleStore";
import { textTr } from "@/constants/locales";
import { MainContainer } from "./OrderPreviewConfirmationPopUp.styles";

const OrderPreviewConfirmationPopUp = ({
	open,
	setOpen,
	orderId,
}: OrderPreviewConfirmationPopUpProps) => {
	const { locale } = useLocaleStore();
	const text = textTr(locale);
	const { isLoggedIn } = useAuthStore();
	const router = useRouter();

	const handleRegisterRedirect = () => {
		setOpen(false);
		router.push(clientRoutes.register);
	};
	const onConfirm = () => {
		router.push({
			pathname: clientRoutes.order,
			query: { id: orderId },
		});
	};
	return (
		<MSModal open={open} onClose={() => setOpen(false)} showActions={false}>
			<MSText
				fontSize="20px"
				color={colors.black}
				style={{ textAlign: "center" }}
			>
				{text.securePaymentsWithMawsouq}
			</MSText>
			<MainContainer>
				<MSText
					fontSize="18px"
					mobileFontSize="16px"
					color={colors.black}
					style={{ textAlign: "center", marginTop: "10px", padding: "0 10px" }}
					fontWeight="600"
				>
					{text.orderPrevConfirmationDescription}
				</MSText>
			</MainContainer>
			<Button
				variant="contained"
				color="success"
				fullWidth
				onClick={isLoggedIn ? onConfirm : handleRegisterRedirect}
				style={{
					marginTop: "20px",
					fontSize: "16px",
					fontWeight: "bold",
					borderRadius: "30px",
					padding: "12px 0",
					backgroundColor: colors.green,
				}}
			>
				{isLoggedIn ? text.proceedByPaying : text.registerToConfirm}
			</Button>
		</MSModal>
	);
};

export default OrderPreviewConfirmationPopUp;
