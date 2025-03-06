import useCustomBreakpoint from "@/helpers/screenSizes";
import { MainWrapper } from "./ActionCard.style";
import MSText from "@/components/Shared/MSText";
import { colors } from "@/constants/theme";

const ActionCard = (props: ActionCardProps) => {
	const { Icon, title, onPress } = props;
	const { isMobile } = useCustomBreakpoint();
	return (
		<MainWrapper
			onClick={() => {
				onPress();
			}}
		>
			<Icon size={isMobile ? 20 : 26} color={colors.white} />
			<MSText fontSize={"14px"} mobileFontSize="12px" color={colors.white}>
				{title}
			</MSText>
		</MainWrapper>
	);
};
export default ActionCard;
