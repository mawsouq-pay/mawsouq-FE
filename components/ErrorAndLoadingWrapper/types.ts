export interface ErrorAndLoadingWrapperProps {
	isLoading?: boolean;
	error?: any;
	errorMessage?: string;
	errorImageSrc?: string;
	loadingComponent?: React.ReactNode;
	children: React.ReactNode;
}
