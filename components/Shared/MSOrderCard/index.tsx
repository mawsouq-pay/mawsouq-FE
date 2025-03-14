import MSText from "../MSText";
import {
	FlexEnd,
	MainWrapper,
	MobileCardContent,
	MobileCardHeader,
	MobileCardWrapper,
	StatusBadge,
	StatusDot,
} from "./OrderCard.style";
import { OrderCardProps, RenderValueProps } from "./types";
import { colors } from "@/constants/theme";
import useCustomBreakpoint from "@/helpers/screenSizes";
import { orderStatusObject } from "@/constants";
import { formatDate } from "@/helpers";
import { useLocaleStore } from "@/store";
import { textTr } from "@/constants/locales";

const MSOrderCard = (props: OrderCardProps) => {
	const {
		transactionTitle,
		price,
		status,
		deliveryDate,
		onPress,
		isFetcherSeller,
		otherPartyName,
	} = props;
	const orderStatusInfo = orderStatusObject[status];
	const { locale } = useLocaleStore();
	const text = textTr(locale);
	const formattedDate = formatDate(deliveryDate);
	const renderValue = ({
		value,
		color,
		size = "16px",
		weight = "normal",
		currencyText,
		mobileFontSize,
	}: RenderValueProps) => {
		return (
			<MSText
				color={color}
				fontSize={size}
				style={{ display: "inline-flex", alignItems: "baseline" }}
				fontWeight={weight}
				mobileFontSize={mobileFontSize}
			>
				{value}{" "}
				{currencyText && (
					<span
						style={{
							fontSize: "14px",
							marginLeft: "4px",
							lineHeight: "1",
						}}
					>
						{currencyText}
					</span>
				)}
			</MSText>
		);
	};

	return (
		<MainWrapper onClick={onPress}>
			<MobileCardWrapper>
				<MobileCardHeader>
					{renderValue({
						value: `${price}`,
						color: colors.semiBlack,
						size: "20px",
						weight: "bold",
						currencyText: "EGP",
					})}

					<StatusBadge backgroundColor={orderStatusInfo.backgroundColor}>
						<StatusDot color="#90EE90" />
						{renderValue({
							value: orderStatusInfo.text,
							color: colors.lightBlack,
							size: "14px",
							weight: "normal",
						})}
					</StatusBadge>
				</MobileCardHeader>

				<MobileCardContent>
					{renderValue({
						value: transactionTitle,
						color: colors.gray,
						size: "14px",
						weight: "normal",
					})}
				</MobileCardContent>
				<FlexEnd>
					<MSText color={colors.LabelValue} fontSize="14px">
						{isFetcherSeller ? text.buyerName : text.sellerName}:
					</MSText>
					{renderValue({
						value: otherPartyName ?? "N/A",
						color: colors.gray,
						size: "14px",
						weight: "normal",
					})}
				</FlexEnd>

				{/* <FlexEnd>
					<DueDateIcon />
					{renderValue({
						value: formattedDate,
						color: colors.gray,
						size: "14px",
						weight: "normal",
					})}
				</FlexEnd> */}
			</MobileCardWrapper>
		</MainWrapper>
	);
};

export default MSOrderCard;
