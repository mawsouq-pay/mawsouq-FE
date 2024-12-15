import { FlexEnd, MainWrapper } from "./StatusCard.style";

const StatusCard = (props: StatusCardProps) => {
    const {
        Icon,
        title,
        Status
    } = props
    return (
        <MainWrapper>
            <Icon />
            <h1>title</h1>
            <FlexEnd>
                {Status}
            </FlexEnd>


        </MainWrapper >
    );
};
export default StatusCard