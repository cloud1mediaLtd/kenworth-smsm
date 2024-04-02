const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "www.jeep.com",
			},
			{
				protocol: "https",
				hostname: "www.wikimedia.org",
			},
		],
	},
};

module.exports = withNextIntl(nextConfig);
