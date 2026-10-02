import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'export',
    serverExternalPackages: ['@libsql/client', 'libsql', '@prisma/adapter-libsql'],
    images: {
        unoptimized: true,
    },
    trailingSlash: true,
    webpack: (config) => {
        config.module.rules.push({
            test: /\.(md|txt|LICENSE|node|d\.ts)$/i,
            type: 'asset/source',
        });
        return config;
    },
};

export default nextConfig;
