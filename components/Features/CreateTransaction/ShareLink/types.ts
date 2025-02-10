export interface ShareLinkProps {
	orderLink?: string | null;
	isPending?: boolean;
	error?: Error | null;
	navigateToFirstStep: () => void;
	orderId?: string | null;
}
