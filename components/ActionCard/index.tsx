import MSText from "../MSText";
import { MainWrapper } from "./ActionCard.style";

const ActionCard = (props: ActionCardProps) => {
	const { Icon, title, onPress } = props;
	return (
		<MainWrapper>
			<Icon />
			<MSText>{title}</MSText>
		</MainWrapper>
	);
};
export default ActionCard;
