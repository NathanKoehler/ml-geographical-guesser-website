/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/ml-geographical-guesser-website',
    output: "export",
    reactStrictMode: true,
    images: {
      unoptimized: true,
    }
  };
  
  module.exports = nextConfig;