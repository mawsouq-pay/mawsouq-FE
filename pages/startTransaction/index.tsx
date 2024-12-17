import TransactionForm from "@/components/TransactionForm";
import HomePageLayout from "@/layouts/HomePageLayout";

const StartTransaction = () => {
	return <TransactionForm />;
};
StartTransaction.CustomLayout = HomePageLayout;
export default StartTransaction;
