import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				{/* Favicons */}
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
				{/* Display in tab */}
				<link rel="shortcut icon" href="/layout/favicon.ico" />
				<link rel="manifest" href="/layout/site.webmanifest" />
				<meta name="theme-color" content="#000000" />
				<meta
					name="description"
					content="Mawsouq protects your money until delivery is confirmed. Track your order and file a complaint when needed."
				/>
				{/* Static Meta for Social Sharing */}
				<meta
					property="og:title"
					content="Mawsouq – Secure Your Orders & Payments"
				/>
				<meta
					property="og:description"
					content="Mawsouq protects your money until delivery is confirmed. Track your order and file a complaint when needed."
				/>
				<meta
					property="og:image"
					content="https://mawsouq-pay.com/layout/opengraph-image.png"
				/>
				<meta property="og:url" content="https://mawsouq-pay.com" />
				<meta property="og:type" content="website" />

				<meta name="twitter:card" content="summary_large_image" />
				<meta
					name="twitter:title"
					content="Mawsouq – Secure Your Orders & Payments"
				/>
				<meta
					name="twitter:description"
					content="Mawsouq protects your money until delivery is confirmed. Track your order and file a complaint when needed."
				/>
				<meta
					name="twitter:image"
					content="https://mawsouq-pay.com/layout/opengraph-image.png"
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
