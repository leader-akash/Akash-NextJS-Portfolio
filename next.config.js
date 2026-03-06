/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disabled so GSAP/ScrollTrigger and DOM effects run once (same as React 17).
  // Restores original animation behavior.
  reactStrictMode: false,
  webpack(config) {
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.('.svg')
    );
    if (fileLoaderRule) {
      config.module.rules.push(
        {
          ...fileLoaderRule,
          test: /\.svg$/,
          resourceQuery: /url/,
        },
        {
          test: /\.svg$/,
          issuer: fileLoaderRule.issuer,
          resourceQuery: { not: [...(fileLoaderRule.resourceQuery?.not || []), /url/] },
          use: ['@svgr/webpack'],
        }
      );
      fileLoaderRule.exclude = /\.svg$/;
    } else {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      });
    }
    return config;
  },
};

module.exports = nextConfig;
