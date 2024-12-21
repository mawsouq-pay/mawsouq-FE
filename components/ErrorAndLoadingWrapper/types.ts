import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface ErrorAndLoadingWrapperProps {
	isLoading?: boolean;
	error?: any;
	errorMessage?: string;
	ErrorIcon?: React.ElementType;
	loadingComponent?: React.ReactNode;
	children: React.ReactNode;
	errorButton?: JSX.Element;
	displayErrorReason?: boolean;
}
