/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: '/your-repo-name',
    trailingSlash: true,
    images: {
        unoptimized: true
    }

};

export default nextConfig;
