import { StartTransactionIcon } from "@/assets/icons";
import ActionCard from "../ActionCard";
import { MainWrapper } from "./ActionSection.style";

const ActionSection = () => {
  return (
    <MainWrapper>
      <ActionCard
        Icon={StartTransactionIcon}
        title={"Start a transaction"}
        onPress={() => {
          console.log("Start Transaftion");
        }}
      />
      <ActionCard
        Icon={StartTransactionIcon}
        title={"View my orders"}
        onPress={() => {
          console.log("Start Transaftion");
        }}
      />
    </MainWrapper>
  );
};
export default ActionSection;
