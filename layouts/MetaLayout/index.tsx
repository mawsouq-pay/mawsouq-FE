import React from "react";
import PageMeta from "@/components/Shared/PageMeta";
import { pageMetadata } from "@/meta";

type PageKey = keyof typeof pageMetadata;

export function withMeta<PageProps>(key: PageKey, PageComponent: any) {
	const meta = pageMetadata[key];

	const ComponentWithMeta = (props: PageProps) => (
		<>
			<PageMeta {...meta} />
			<PageComponent {...props} />
		</>
	);

	(ComponentWithMeta as any).CustomLayout = (PageComponent as any).CustomLayout;

	return ComponentWithMeta as React.ComponentType<PageProps> & {
		CustomLayout?: React.ComponentType;
	};
}
