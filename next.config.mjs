const isGithubPages = process.env.NODE_ENV === "production";

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
  output: "export", // enables `next export`
  basePath: isGithubPages ? "/me" : "",
  assetPrefix: isGithubPages ? "/me/" : "",
};

export default nextConfig;
