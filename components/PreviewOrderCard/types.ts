interface PreviewOrderCardProps {
	transactionTitle: string;
	itemName: string;
	description: string;
	deliveryDate: string;
	quantity: number;
	sellerEmail: string;
	sellerName: string;
	price: number;
	onConfirmPress: () => void;
}
