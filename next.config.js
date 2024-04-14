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
			{
				protocol: "https",
				hostname: "automaxgroup.me",
			},
			{
				protocol: "https",
				hostname: "cdn-empmerch.newjobs.com",
			},
			{
				protocol: "https",
				hostname: "a.storyblok.com",
			}
		],
	},
};

module.exports = withNextIntl(nextConfig);
