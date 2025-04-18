import React from "react";
import MSModal from "../../../Shared/MSModal";
import { useAuthStore } from "@/store";
import { clientRoutes } from "@/routes";
import { useRouter } from "next/router";
import { OrderPreviewConfirmationPopUpProps } from "./types";
import { useLocaleStore } from "@/store/LocaleStore";
import { textTr } from "@/constants/locales";
import {
	ModalContainer,
	StepsWrapper,
	StepRow,
} from "./OrderPreviewConfirmationPopUp.styles";
import { useHandleAcceptPayments } from "@/hooks/useHandleAcceptPayment";
import MSText from "@/components/Shared/MSText";
import { colors } from "@/constants/theme";
import { Package, Check } from "lucide-react";

const OrderPreviewConfirmationPopUp = ({
	open,
	setOpen,
	orderId,
}: OrderPreviewConfirmationPopUpProps) => {
	const { locale } = useLocaleStore();
	const text = textTr(locale);
	const { isLoggedIn } = useAuthStore();
	const router = useRouter();
	const { handleBuyerPayment, isBuyerPaymentPending } =
		useHandleAcceptPayments();

	const handleRegisterRedirect = () => {
		setOpen(false);
		router.replace({
			pathname: clientRoutes.register,
			query: { orderId },
		});
	};

	const onConfirm = () => {
		isLoggedIn ? handleBuyerPayment(orderId) : handleRegisterRedirect();
	};

	return (
		<MSModal
			open={open}
			onClose={() => setOpen(false)}
			showActions={true}
			onConfirm={onConfirm}
			confirmButtonProps={{ loading: isBuyerPaymentPending }}
			confirmText={isLoggedIn ? text.proceedByPaying : text.signUpToPay}
			title={text.yourPaymentIsSafeWithMawsouq}
		>
			{/* <IconWrapper>
				<ShieldCheck size={38} color={colors.green600} />
			</IconWrapper> */}

			<ModalContainer>
				<StepsWrapper>
					<StepRow>
						<Package size={18} color={colors.darkGray} />
						<MSText fontSize="16px" fontWeight={"620"} color={colors.darkGray}>
							{text.trackUntilDelivery}
						</MSText>
					</StepRow>
					<StepRow>
						<Check size={18} color={colors.darkGray} />
						<MSText fontSize="16px" fontWeight={"620"} color={colors.darkGray}>
							{text.confirmAndReleaseWhenApproved}
						</MSText>
					</StepRow>
				</StepsWrapper>
			</ModalContainer>
		</MSModal>
	);
};

export default OrderPreviewConfirmationPopUp;
