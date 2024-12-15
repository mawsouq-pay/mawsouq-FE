import MSText from "../MSText";
import { MainWrapper } from "./ActionCard.style";

const ActionCard = (props: ActionCardProps) => {
  const {
    Icon,
    title
  } = props
  return (
    <MainWrapper>
      <Icon />
      <h1>title</h1>
    </MainWrapper >
  );
};
export default ActionCard;
