import { Skeleton } from "@mui/material";
import { Text } from "./MSText.style";
import { MSTextProps } from "./types";
import useCustomBreakpoint from "@/helpers/screenSizes";
import Styles from "./MSText.module.css";

const MSText: React.FC<MSTextProps> = ({
	children,
	className = "",
	style,
	color,
	fontSize,
	fontWeight,
	isLoading,
	skeletonHeight,
	skeletonWidth,
	mobileFontSize,
	fontStyle,
	...props
}) => {
	const { isMobile } = useCustomBreakpoint();
	const adjustedFontSize =
		isMobile && mobileFontSize ? mobileFontSize : fontSize;
	return (
		<>
			{isLoading ? (
				<Skeleton
					animation={false}
					variant="text"
					width={skeletonWidth}
					height={skeletonHeight}
				/>
			) : (
				<>
					<Text
						{...props}
						style={style}
						// className={`${Styles.text} ${className}`}
						fontSize={adjustedFontSize}
						color={color}
						fontWeight={fontWeight}
						fontStyle={fontStyle}
					>
						{children}
					</Text>
				</>
			)}
		</>
	);
};

export default MSText;
