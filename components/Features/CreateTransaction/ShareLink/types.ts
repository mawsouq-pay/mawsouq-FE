export interface ShareLinkProps {
	isPending?: boolean;
	error?: Error | null;
	navigateToFirstStep: () => void;
	orderId?: string | null;
	isPendingSeller: boolean;
}
