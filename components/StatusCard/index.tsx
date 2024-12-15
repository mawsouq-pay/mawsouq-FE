import MSText from "../MSText";
import { FlexEnd, MainWrapper } from "./StatusCard.style";

const StatusCard = (props: StatusCardProps) => {
	const { Icon, title, Status } = props;
	return (
		<MainWrapper>
			<Icon />
			<MSText fontSize="18px" fontWeight="regular">
				{title}
			</MSText>
			<FlexEnd>{Status}</FlexEnd>
		</MainWrapper>
	);
};
export default StatusCard;
