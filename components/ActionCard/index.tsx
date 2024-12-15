import MSText from "../MSText";
import { MainWrapper } from "./ActionCard.style";

const ActionCard = (props: ActionCardProps) => {
  const { Icon } = props;
  return (
    <MainWrapper>
      <Icon />
      <MSText>{props.title}</MSText>
    </MainWrapper>
  );
};
export default ActionCard;
