import { Skeleton } from "@mui/material";
import { Text } from "./MSText.style";
import { MSTextProps } from "./types";
import useCustomBreakpoint from "@/helpers/screenSizes";
import { useLocaleStore } from "@/store";

const MSText: React.FC<MSTextProps> = ({
	children,
	className = "",
	style,
	color,
	fontSize = "16px",
	fontWeight,
	isLoading,
	skeletonHeight,
	skeletonWidth,
	mobileFontSize,
	fontStyle,
	...props
}) => {
	const { isMobile } = useCustomBreakpoint();
	const { locale } = useLocaleStore();
	const isArabic = locale === "ar";

	const rawFontSize = isMobile && mobileFontSize ? mobileFontSize : fontSize;

	const adjustedFontSize =
		typeof rawFontSize === "string"
			? rawFontSize.endsWith("px")
				? `${parseInt(rawFontSize) + (isArabic ? 1 : 0)}px`
				: rawFontSize.endsWith("rem")
					? `${parseFloat(rawFontSize) + (isArabic ? 0.6 : 0)}rem`
					: rawFontSize
			: "16px";

	return isLoading ? (
		<Skeleton
			animation={false}
			variant="text"
			width={skeletonWidth}
			height={skeletonHeight}
		/>
	) : (
		<Text
			{...props}
			style={style}
			fontSize={adjustedFontSize}
			color={color}
			fontWeight={fontWeight}
			fontStyle={fontStyle}
		>
			{children}
		</Text>
	);
};

export default MSText;
