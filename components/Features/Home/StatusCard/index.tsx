import MSText from "@/components/Shared/MSText";
import { FlexEnd, MainWrapper } from "./StatusCard.style";

const StatusCard = (props: StatusCardProps) => {
	const { Icon, title, Status } = props;
	return (
		<MainWrapper>
			<Icon />
			<MSText fontSize="16px" fontWeight="regular">
				{title}
			</MSText>
			<FlexEnd>{Status}</FlexEnd>
		</MainWrapper>
	);
};
export default StatusCard;
