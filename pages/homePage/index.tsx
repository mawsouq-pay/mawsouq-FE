import { useFetchOrders } from "@/hooks/orderHooks";

const HomePage = () => {
    const { data: ordersData, isPending, error } = useFetchOrders()
    console.log(ordersData?.orders)
    return (
        <h1>hey</h1>
    );
};
export default HomePage