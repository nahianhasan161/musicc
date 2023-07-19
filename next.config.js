module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  images: {
    domains: ['lh3.googleusercontent.com'], // Add the necessary domains for your images
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};
