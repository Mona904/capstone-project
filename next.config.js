const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.picturethisai.com",
      },
      {
        protocol: "https",
        hostname: "picturethisai.com",
      },
      {
        protocol: "https",
        hostname: "cdn11.bigcommerce.com",
      },
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
      },
    ],
  },
  exportPathMap: async function () {
    return {
      "/": { page: "/" }, // Home page
      "/hamburg": { page: "/[location]", query: { location: "hamburg" } },
      "/munich": { page: "/[location]", query: { location: "munich" } },
      "/cologne": { page: "/[location]", query: { location: "cologne" } },
    };
  },
};

module.exports = nextConfig;
