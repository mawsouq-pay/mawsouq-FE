// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
// 	/* config options here */
// 	serverActions: true,
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		serverActions: true,
	},
};

module.exports = nextConfig;
