import React from "react";
import { Formik } from "formik";
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
import { RoleSelectionProps, createValidationSchema } from "./types";
import FormItem from "@/components/FormItem";
import MSButton from "@/components/Shared/MSButton";
import { useLocaleStore } from "@/store/LocaleStore";
import { textTr } from "@/constants/locales";
import { RolesEnum } from "@/constants";
import { colors } from "@/constants/theme";
import { StartTransactionFormNames } from "../StartTransactionCard/types";

const RoleSelection = ({ onSubmit, initialValues }: RoleSelectionProps) => {
	const { locale } = useLocaleStore();
	const text = textTr(locale);
	const validationSchema = createValidationSchema(locale);

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
						{/* Title */}
						<FormItem
							label={text.transactionTitle}
							id={initialValues.transactionTitle}
							name={StartTransactionFormNames.transactionTitle}
							placeholder={text.enterTitle}
						/>

						<MSText
							fontSize="18px"
							fontWeight="600"
							color={colors.gray}
							style={{ marginTop: "50px" }}
						>
							{text.chooseRole}
						</MSText>
						<RoleOptions>
							<RoleCard
								isSelected={values.role === RolesEnum.SELLER}
								onClick={() => {
									setFieldValue(
										`${StartTransactionFormNames.role}`,
										RolesEnum.SELLER
									);
								}}
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
									{text.seller}
								</MSText>
							</RoleCard>
							<RoleCard
								isSelected={values.role === RolesEnum.BUYER}
								onClick={() => {
									setFieldValue(
										`${StartTransactionFormNames.role}`,
										RolesEnum.BUYER
									);
								}}
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
									{text.buyer}
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
