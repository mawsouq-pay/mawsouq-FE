import Head from "next/head";

type Props = {
	title: string;
	description: string;
	canonical?: string;
};

const PageMeta = ({ title, description, canonical }: Props) => {
	return (
		<Head>
			<title>{title}</title>
			<meta name="description" content={description} />
			{canonical && <link rel="canonical" href={canonical} />}
		</Head>
	);
};

export default PageMeta;
