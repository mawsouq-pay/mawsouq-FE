interface PreviewOrderCardProps {
	transactionTitle: string;
	itemName: string;
	description: string;
	deliveryDate: string;
	quantity: number;
	otherPartyEmail: string;
	otherPartyPhone: string;
	price: number;
	isPending: boolean;
	error: Error | null;
}
