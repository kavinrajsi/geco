/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.media.strapiapp.com",
      },
    ],
  },
};

export default nextConfig;
