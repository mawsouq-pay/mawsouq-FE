import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	async rewrites() {
		return [
			{ source: "/ingest/static/:path*", destination: "https://eu-assets.i.posthog.com/static/:path*" },
			{ source: "/ingest/:path*", destination: "https://eu.i.posthog.com/:path*" },
			{ source: "/ingest/decide", destination: "https://eu.i.posthog.com/decide" },
		];
	},
	skipTrailingSlashRedirect: true,
	/* config options here */
	// serverActions: true,
};

export default nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
// 	experimental: {
// 		serverActions: true,
// 	},
// };

// module.exports = nextConfig;
