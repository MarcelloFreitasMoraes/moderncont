/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        swcLoader: true,
    },
    compiler: {
        styledComponents: true,
    },
    images: {
        domains: [
            'moderncont.com.br',           
        ],
    },
}

export default nextConfig;
