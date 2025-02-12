export interface PreviewDetailsProps {
	formData: {
		transactionTitle: string;
		description: string;
		price: string;
		deliveryDate: string;
		otherPartyEmail: string;
		otherPartyPhone: string;
	};
	onConfirm: () => void;
	onBack: () => void;
}
