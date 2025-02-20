import React from "react";
import MSModal from "../../../Shared/MSModal";
import { useAuthStore } from "@/store";
import { clientRoutes } from "@/routes";
import { useRouter } from "next/router";
import MSText from "../../../Shared/MSText";
import { colors } from "@/constants/theme";
import { OrderPreviewConfirmationPopUpProps } from "./types";
import { useLocaleStore } from "@/store/LocaleStore";
import { textTr } from "@/constants/locales";
import {
	MainContainer,
	IconWrapper,
} from "./OrderPreviewConfirmationPopUp.styles";
import MSButton from "@/components/Shared/MSButton";
import { useLinkOrder } from "@/hooks/orderHooks";
import { useNotification } from "@/store/SnackBarStore";
import { AxiosError } from "axios";
import { ShieldCheck } from "lucide-react";

const OrderPreviewConfirmationPopUp = ({
	open,
	setOpen,
	orderId,
}: OrderPreviewConfirmationPopUpProps) => {
	const { locale } = useLocaleStore();
	const text = textTr(locale);
	const { isLoggedIn } = useAuthStore();
	const router = useRouter();
	const { mutate: LinkOrderMutate, isPending } = useLinkOrder();
	const { showAxiosErrorNotification, showSuccessNotification } =
		useNotification();

	const handleRegisterRedirect = () => {
		setOpen(false);
		router.replace({
			pathname: clientRoutes.register,
			query: { orderId: orderId },
		});
	};

	const onConfirm = () => {
		LinkOrderMutate(
			{ orderId },
			{
				onSuccess: () => {
					router.replace({
						pathname: clientRoutes.order,
						query: { id: orderId },
					});
					showSuccessNotification(text.successfullyLinkedToOrder);
				},
				onError: (error) => {
					showAxiosErrorNotification(error as AxiosError);
					router.push({
						pathname: clientRoutes.homePage,
					});
				},
			}
		);
	};

	return (
		<MSModal open={open} onClose={() => setOpen(false)} showActions={false}>
			<IconWrapper>
				<ShieldCheck size={50} color={colors.blue} />
			</IconWrapper>
			<MSText
				fontSize="22px"
				color={colors.black}
				fontWeight="bold"
				style={{ textAlign: "center" }}
			>
				{text.securePaymentsWithMawsouq}
			</MSText>
			<MainContainer>
				<MSText
					fontSize="16px"
					mobileFontSize="14px"
					color={colors.darkGray}
					style={{ textAlign: "center", marginTop: "10px", padding: "0 10px" }}
				>
					With Mawsouq, your payment stays secure until you receive and approve
					your order. Once confirmed, the seller gets paid. No risk, no scams –
					just safe transactions.
				</MSText>
			</MainContainer>
			<MSButton
				style={{
					width: "100%",
					marginTop: "20px",
				}}
				title={isLoggedIn ? "Confirm and Secure Order" : "Sign Up to Proceed"}
				onClick={isLoggedIn ? onConfirm : handleRegisterRedirect}
				loading={isPending}
			/>
		</MSModal>
	);
};

export default OrderPreviewConfirmationPopUp;
