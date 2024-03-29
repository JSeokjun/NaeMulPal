/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
        config.module.rules.push({
          test: /\.svg$/,
          use: ['@svgr/webpack'],
        });

        return config;
    },
}
const withVideos = require('next-videos')

module.exports = nextConfig
module.exports = withVideos()