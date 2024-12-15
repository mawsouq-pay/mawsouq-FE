import { StartTransactionIcon } from "@/assets/icons";
import ActionCard from "@/components/ActionCard";
import ActionSection from "@/components/ActionsSection";
import StatusSection from "@/components/StatusSection";
import { useFetchOrders } from "@/hooks/orderHooks";

const HomePage = () => {
  const { data: ordersData, isPending, error } = useFetchOrders();
  console.log(ordersData?.orders);
  return <>
    <StatusSection />
    <ActionSection />;

  </>
};
export default HomePage;
