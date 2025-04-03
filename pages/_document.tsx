import React from "react";
import Head from "next/head";

const Document = () => {
	return (
		<Head>
			<link
				rel="apple-touch-icon"
				sizes="180x180"
				href="/layout/apple-touch-icon.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="96x96"
				href="/layout/favicon-96x96.png"
			/>
			<link rel="icon" type="image/svg+xml" href="/layout/favicon.svg" />
			<link rel="shortcut icon" href="/layout/favicon.ico" />
			<link rel="manifest" href="/layout/site.webmanifest" />
			<meta name="theme-color" content="#000000" />
		</Head>
	);
};

export default Document;
