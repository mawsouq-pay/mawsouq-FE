export interface PreviewDetailsProps {
	formData: {
		transactionTitle: string;
		itemName: string;
		description: string;
		price: string;
		deliveryDate: string;
		quantity: string;
		otherPartyEmail: string;
		otherPartyPhone: string;
	};
	onConfirm: () => void;
	onBack: () => void;
}
