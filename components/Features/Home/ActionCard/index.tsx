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
			<Icon size={isMobile ? 20 : 34} color={colors.green} />
			<MSText fontSize={"16px"} mobileFontSize="12px">
				{title}
			</MSText>
		</MainWrapper>
	);
};
export default ActionCard;
