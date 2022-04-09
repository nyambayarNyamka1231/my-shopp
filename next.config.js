/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  paths: {
    "@/components/*": ["components/*"],
    "@/lib/*": ["lib/*"],
    "@/styles/*": ["styles/*"],
  },
};

module.exports = nextConfig;
