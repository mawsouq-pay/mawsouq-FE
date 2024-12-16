import useCustomBreakpoint from "@/helpers/screenSizes";
import MSText from "../MSText";
import { MainWrapper } from "./ActionCard.style";

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
			<MSText>{title}</MSText>
		</MainWrapper>
	);
};
export default ActionCard;
