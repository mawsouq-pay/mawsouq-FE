import { StartTransactionData } from "../StartTransactionCard/types";

export interface RoleSelectionProps {
	onSubmit: (formData: StartTransactionData) => void;
	initialValues: StartTransactionData;
}
