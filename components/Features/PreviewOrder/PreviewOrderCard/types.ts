interface PreviewOrderCardProps {
	transactionTitle: string;
	description: string;
	deliveryDate: string;
	sellerEmail: string;
	sellerName: string;
	price: number;
	onConfirmPress: () => void;
}
