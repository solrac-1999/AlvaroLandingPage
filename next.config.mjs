/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['pbs.twimg.com'],
        formats: ['image/avif', 'image/webp'],
    },
    compress: true,
    poweredByHeader: false,
    swcMinify: true,
};

export default nextConfig;
