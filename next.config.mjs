/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/lacalle-landing-page",
  env: {
    NEXT_PUBLIC_BASE_PATH: "/lacalle-landing-page",
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
