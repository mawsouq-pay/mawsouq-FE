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
import { MainContainer } from "./OrderPreviewConfirmationPopUp.styles";
import MSButton from "@/components/Shared/MSButton";
import { useLinkOrder } from "@/hooks/orderHooks";
import { useNotification } from "@/store/SnackBarStore";
import { AxiosError } from "axios";

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
		router.push({
			pathname: clientRoutes.register,
			query: { orderId: orderId },
		});
	};
	const onConfirm = () => {
		LinkOrderMutate(
			{ orderId },
			{
				onSuccess: () => {
					router.push({
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
			<MSButton
				style={{
					width: "100%",
				}}
				title={isLoggedIn ? text.approveAndLinkOrder : text.registerToConfirm}
				onClick={isLoggedIn ? onConfirm : handleRegisterRedirect}
				loading={isPending}
			/>
		</MSModal>
	);
};

export default OrderPreviewConfirmationPopUp;
