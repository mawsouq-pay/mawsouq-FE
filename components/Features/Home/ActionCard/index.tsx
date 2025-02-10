import useCustomBreakpoint from "@/helpers/screenSizes";
import { MainWrapper } from "./ActionCard.style";
import MSText from "@/components/Shared/MSText";

const ActionCard = (props: ActionCardProps) => {
	const { Icon, title, onPress } = props;
	const { isMobile } = useCustomBreakpoint();
	return (
		<MainWrapper
			onClick={() => {
				onPress();
			}}
		>
			<Icon width={isMobile ? 24 : null} />
			<MSText fontSize={"16px"} mobileFontSize="12px">
				{title}
			</MSText>
		</MainWrapper>
	);
};
export default ActionCard;
