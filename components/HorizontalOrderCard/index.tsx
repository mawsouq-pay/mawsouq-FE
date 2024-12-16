import MSText from "../MSText";
import { MainWrapper } from "./HorizontalOrderCard.style";
import { HorizontalCardProps } from "./types";
import { textTr } from "@/constants/locales";
import { useLocaleStore } from "@/store/LocaleStore";
import { colors } from "@/constants/theme";
import useCustomBreakpoint from "@/helpers/screenSizes";
import { Grid2 } from "@mui/material";

const HorizontalOrderCard = (props: HorizontalCardProps) => {
	const { locale } = useLocaleStore();
	const text = textTr(locale);
	const { isMobile } = useCustomBreakpoint();
	const { orderNo, itemName, amount, status } = props;
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
				<Grid2>
					{title(text.orderNo)}
					{value("S@", colors.black)}
				</Grid2>
				<Grid2 style={{ gap: "10px" }}>
					{title(text.item)}
					{value("Painting", colors.black)}
				</Grid2>
				<Grid2 style={{ gap: "10px" }}>
					{title(text.amount)}
					{value("20", colors.black)}
				</Grid2>
				<Grid2 style={{ gap: "10px" }}>
					{title(text.status)}
					{value("Delivered", colors.green)}
				</Grid2>
			</Grid2>
		</MainWrapper>
	);
};
export default HorizontalOrderCard;
