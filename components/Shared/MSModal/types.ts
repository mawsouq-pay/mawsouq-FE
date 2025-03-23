import { ReactNode } from "react";

export interface MSModalProps {
	open: boolean;
	onClose?: () => void;
	title?: string;
	children: ReactNode;
	confirmText?: string;
	cancelText?: string;
	onConfirm?: () => void;
	showActions?: boolean;
	confirmButtonProps?: Partial<MSButtonProps>;
	cancelButtonProps?: Partial<MSButtonProps>;
}
