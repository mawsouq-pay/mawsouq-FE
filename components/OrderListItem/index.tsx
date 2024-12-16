import { colors } from "@/constants/theme";
import MSText from "../MSText";
import {
  ItemsContainer,
  ItemWrapper,
  LabelValue,
  MainWrapper,
  NameContainer,
  SellerContainer,
  StatusContainer,
  TextValue,
} from "./OrderListItem.style";
import en from "@/constants/locales/en";

const OrderListItem = () => {
  const OrderItems = [
    { title: en.OrderListItem.orderNumber, value: "Order #1234" },
    { title: en.OrderListItem.Item, value: "Domain for website" },
    { title: en.OrderListItem.Amount, value: "$120" },
    { title: en.OrderListItem.DueDate, value: "December 16, 2024" },
  ];
  return (
    <MainWrapper>
      <ItemsContainer>
        {OrderItems.map((item, index) => {
          return (
            <ItemWrapper>
              <LabelValue>
                <MSText color={colors.LabelValue}>{item.title}</MSText>
              </LabelValue>
              <TextValue>
                <MSText>{item.value}</MSText>
              </TextValue>
            </ItemWrapper>
          );
        })}
      </ItemsContainer>
      <SellerContainer>
        <NameContainer>
          <MSText color={colors.LabelValue} fontSize="14px">
            Seller Name
          </MSText>
          <MSText>Eliane Fares</MSText>
        </NameContainer>
        <StatusContainer>
          <MSText color="#FCA311">Pending</MSText>
        </StatusContainer>
      </SellerContainer>
    </MainWrapper>
  );
};
export default OrderListItem;
