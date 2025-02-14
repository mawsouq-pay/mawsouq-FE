import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import {
	MainWrapper,
	RoleOptions,
	RoleCard,
	IconWrapper,
	RadioButton,
	FlexRow,
	FormContainer,
} from "./RoleSelection.styles";
import { CartIcon, ShopIcon } from "@/assets/icons";
import MSText from "@/components/Shared/MSText";
import { RoleSelectionProps } from "./types";
import FormItem from "@/components/FormItem";
import MSButton from "@/components/Shared/MSButton";
import { useLocaleStore } from "@/store/LocaleStore";
import { textTr } from "@/constants/locales";
import { RolesEnum } from "@/constants";
import { colors } from "@/constants/theme";

const validationSchema = Yup.object().shape({
	transactionTitle: Yup.string().required("Transaction title is required"),
	role: Yup.string().required("Please select a role"),
});

const RoleSelection = ({ onSubmit, initialValues }: RoleSelectionProps) => {
	const { locale } = useLocaleStore();
	const text = textTr(locale);
	const handleSubmit = (values: typeof initialValues) => {
		onSubmit(values);
	};

	return (
		<FormContainer>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={handleSubmit}
			>
				{({ values, setFieldValue }) => (
					<MainWrapper>
						<FormItem
							label="Transaction Title"
							type="text"
							id="transactionTitle"
							name="transactionTitle"
							placeholder="Enter a title for the transaction"
						/>

						<MSText
							fontSize="18px"
							fontWeight="600"
							color={colors.gray}
							style={{ marginTop: "50px" }}
						>
							Choose Your Role
						</MSText>
						<RoleOptions>
							<RoleCard
								isSelected={values.role === RolesEnum.BUYER}
								onClick={() => setFieldValue("role", RolesEnum.BUYER)}
							>
								<RadioButton
									type="radio"
									checked={values.role === RolesEnum.BUYER}
									readOnly
								/>
								<IconWrapper>
									<CartIcon />
								</IconWrapper>
								<MSText
									fontSize="20px"
									fontWeight="bold"
									color={colors.buttonGreenBackground}
								>
									Buyer
								</MSText>
							</RoleCard>

							<RoleCard
								isSelected={values.role === RolesEnum.SELLER}
								onClick={() => setFieldValue("role", RolesEnum.SELLER)}
							>
								<RadioButton
									type="radio"
									checked={values.role === RolesEnum.SELLER}
									readOnly
								/>
								<IconWrapper>
									<ShopIcon />
								</IconWrapper>
								<MSText
									fontSize="20px"
									fontWeight="bold"
									color={colors.buttonGreenBackground}
								>
									Seller
								</MSText>
							</RoleCard>
						</RoleOptions>
						<FlexRow>
							<MSButton
								title={text.next}
								type="submit"
								style={{
									height: 40,
									width: "fit-content",
									alignSelf: "flex-end",
								}}
							/>
						</FlexRow>
					</MainWrapper>
				)}
			</Formik>
		</FormContainer>
	);
};

export default RoleSelection;
