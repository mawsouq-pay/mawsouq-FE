import MSText from "../MSText";
import { MainWrapper } from "./OrderCard.style";
import { HorizontalCardProps } from "./types";
import { textTr } from "@/constants/locales";
import { useLocaleStore } from "@/store/LocaleStore";
import { colors } from "@/constants/theme";
import useCustomBreakpoint from "@/helpers/screenSizes";
import { Grid2 } from "@mui/material";

const OrderCard = (props: HorizontalCardProps) => {
	const { locale } = useLocaleStore();
	const text = textTr(locale);
	const { isMobile } = useCustomBreakpoint();
	const { orderNo, itemName, amount, status } = props;
	const dataPairs = [
		{ title: text.orderNo, value: orderNo, color: colors.blue },
		{ title: text.item, value: itemName, color: colors.black },
		{ title: text.amount, value: amount, color: colors.black },
		{ title: text.status, value: status, color: colors.green },
	];
	const title = (titleName: any) => {
		return (
			<MSText color={colors.gray} fontSize="16px">
				{titleName}
			</MSText>
		);
	};
	const value = (value: string, color: string) => {
		return (
			<MSText color={color} fontSize="16px">
				{value}
			</MSText>
		);
	};

	return (
		<MainWrapper>
			<Grid2
				container
				direction={isMobile ? "column" : "row"}
				sx={{
					justifyContent: "space-between",
					alignItems: isMobile ? "flex-start" : "center",
					flex: 1,
				}}
				spacing={isMobile ? 4 : 16}
			>
				{!isMobile ? (
					<>
						{dataPairs.map((item) => {
							return (
								<Grid2 container direction="column" sx={{ gap: 1 }}>
									{title(item.title)}
									{value(item.value, item.color)}
								</Grid2>
							);
						})}
					</>
				) : (
					<>
						<Grid2
							container
							direction="row"
							justifyContent="space-between"
							sx={{ gap: isMobile ? 2 : 0, width: "100%" }}
						>
							<Grid2 container direction="column" sx={{ gap: 1 }}>
								{title(text.orderNo)}
								{value("#36633", colors.blue)}
							</Grid2>
							<Grid2 container direction="column" sx={{ gap: 1 }}>
								{title(text.amount)}
								{value("$120", colors.black)}
							</Grid2>
						</Grid2>

						<Grid2
							container
							direction="row"
							justifyContent="space-between"
							sx={{ gap: isMobile ? 2 : 0, width: "100%" }}
						>
							<Grid2 container direction="column" sx={{ gap: 1 }}>
								{title(text.item)}
								{value("Painting", colors.black)}
							</Grid2>
							<Grid2 container direction="column" sx={{ gap: 1 }}>
								{title(text.status)}
								{value("Delivered", colors.green)}
							</Grid2>
						</Grid2>
					</>
				)}
			</Grid2>
		</MainWrapper>
	);
};
export default OrderCard;
