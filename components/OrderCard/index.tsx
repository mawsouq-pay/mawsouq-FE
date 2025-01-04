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
import { DueDateIcon } from "@/assets/icons";
import OrderListItem from "../OrderListItem";
import { formatDate } from "@/helpers";

const OrderCard = (props: OrderCardProps) => {
	const { isMobile } = useCustomBreakpoint();
	const { transactionTitle, itemName, price, status, deliveryDate, onPress } =
		props;
	const orderStatusInfo = orderStatusObject[status];
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
			{!isMobile ? (
				<OrderListItem
					transactionTitle={transactionTitle}
					price={price}
					itemName={itemName}
					status={status}
					deliveryDate={deliveryDate}
				/>
			) : (
				<MobileCardWrapper>
					<MobileCardHeader>
						{renderValue({
							value: `${price}`,
							color: colors.semiBlack,
							size: "24px",
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
						{renderValue({
							value: itemName,
							color: colors.black,
							size: "16px",
							weight: "600",
						})}
					</MobileCardContent>

					<FlexEnd>
						<DueDateIcon />
						{renderValue({
							value: formattedDate,
							color: colors.gray,
							size: "14px",
							weight: "normal",
						})}
					</FlexEnd>
				</MobileCardWrapper>
			)}
		</MainWrapper>
	);
};

export default OrderCard;
