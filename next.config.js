/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['yt3.googleusercontent.com', 'www.google.com'],
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = nextConfig;
