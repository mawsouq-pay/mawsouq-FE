import Head from "next/head";

type Props = {
	title: string;
	description: string;
	canonical?: string;
	image?: string;
};

const PageMeta = ({ title, description, canonical, image }: Props) => {
	return (
		<Head>
			<title>{title}</title>
			<meta name="description" content={description} />
			{canonical && <link rel="canonical" href={canonical} />}

			{/* ✅ Open Graph */}
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			{canonical && <meta property="og:url" content={canonical} />}
			{image && <meta property="og:image" content={image} />}

			{/* ✅ Twitter Card */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			{image && <meta name="twitter:image" content={image} />}
		</Head>
	);
};

export default PageMeta;
