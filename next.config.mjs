/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['pbs.twimg.com', 'ik.imagekit.io'],
        formats: ['image/avif', 'image/webp'],
    },
    compress: true,
    poweredByHeader: false,
    swcMinify: true,
    async headers() {
        return [
            {
                source: '/:path*.mp4',
                headers: [
                    {
                        key: 'Content-Type',
                        value: 'video/mp4',
                    },
                    {
                        key: 'Accept-Ranges',
                        value: 'bytes',
                    },
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable',
                    },
                ],
            },
            {
                source: '/Hero.mp4',
                headers: [
                    {
                        key: 'Content-Type',
                        value: 'video/mp4',
                    },
                    {
                        key: 'Accept-Ranges',
                        value: 'bytes',
                    },
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable',
                    },
                ],
            },
            {
                source: '/Testimonio :path*.mp4',
                headers: [
                    {
                        key: 'Content-Type',
                        value: 'video/mp4',
                    },
                    {
                        key: 'Accept-Ranges',
                        value: 'bytes',
                    },
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable',
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
