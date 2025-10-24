/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: "export",
  basePath: "/me",
  assetPrefix: "/me",
  trailingSlash: true, // Optional: helps with GitHub Pages routing
};

export default nextConfig;
