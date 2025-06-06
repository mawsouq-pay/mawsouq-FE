import React from "react";

export interface MSTextProps {
	children: React.ReactNode;
	className?: string;
	style?: React.CSSProperties;
	isLoading?: boolean;
	skeletonWidth?: string;
	skeletonHeight?: string;
	color?: string;
	fontSize?: string;
	fontWeight?: string;
	mobileFontSize?: string;
}
