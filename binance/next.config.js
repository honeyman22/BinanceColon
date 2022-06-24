/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.coinranking.com"],
  },
  env: {
    REACT_APPP_CRYPTO_CRYPTO_X_RAPIDAPI_HOST:
      process.env.REACT_APPP_CRYPTO_CRYPTO_X_RAPIDAPI_HOST,
    REACT_APPP_CRYPTO_CRYPTO_X_RAPIDAPI_KEY:
      process.env.REACT_APPP_CRYPTO_CRYPTO_X_RAPIDAPI_KEY,
  },
};

module.exports = nextConfig;
