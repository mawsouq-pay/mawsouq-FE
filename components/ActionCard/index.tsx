import { MainWrapper } from "./ActionCard.style";

const ActionCard = (props: ActionCardProps) => {
    const {
        Icon
    } = props
    return (
        <MainWrapper>
            <Icon />
            <h1>bye</h1>
        </MainWrapper >
    );
};
export default ActionCard