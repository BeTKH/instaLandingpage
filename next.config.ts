import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      'personal-react-portfolio-images.s3.us-east-1.amazonaws.com',
      'images.credly.com', // Add this domain for the images from Credly
    ],
  },
};

export default nextConfig;
