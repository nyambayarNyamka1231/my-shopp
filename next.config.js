/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  paths: {
    "@/components/*": ["components/*"],
    "@/lib/*": ["lib/*"],
    "@/styles/*": ["styles/*"],
  },
  images: {
    domains: ["cdn3.shoppy.mn"],
  },
};

module.exports = nextConfig;
