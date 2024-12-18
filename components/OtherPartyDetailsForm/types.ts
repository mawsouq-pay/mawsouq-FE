import * as Yup from "yup";

export const validationSchema = Yup.object({
	phoneNumber: Yup.string()
		.matches(/^[0-9]+$/, "Phone number must contain only digits")
		.min(10, "Phone number must be at least 10 digits")
		.required("Phone number is required"),
	email: Yup.string()
		.email("Invalid email format")
		.required("Email is required"),
});
export interface OtherPartyDetailsFormProps {
	onSubmit: () => void;
	onBack?: () => void;
	isSteps?: boolean;
	paymentDetails?: {
		amount: number;
		escrowFee?: number;
		totalDue: number;
	};
}
