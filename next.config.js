/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh5.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'thfcoffee.com',
      },
      {
        protocol: 'https',
        hostname: 'wheelscoffee.com',
      },
      {
        protocol: 'https',
        hostname: 'kinokimi.id',
      },
      {
        protocol: 'https',
        hostname: 'kopitokodjawa.com',
      },
      {
        protocol: 'https',
        hostname: 'mimiti.coffee',
      },
      {
        protocol: 'https',
        hostname: 'bluedoors.id',
      },
      {
        protocol: 'https',
        hostname: 'jardin.cafe',
      },
      {
        protocol: 'https',
        hostname: 'oneeighty.id',
      },
      {
        protocol: 'https',
        hostname: 'lawangwangi.com',
      },
      {
        protocol: 'https',
        hostname: 'orofi.cafe',
      },
      {
        protocol: 'https',
        hostname: 'cocorico.id',
      },
      {
        protocol: 'https',
        hostname: 'sierra.id',
      },
      {
        protocol: 'https',
        hostname: 'deu.coffee',
      },
      {
        protocol: 'https',
        hostname: 'khoepekgoan.id',
      },
      {
        protocol: 'https',
        hostname: 'thebloei.com',
      },
      {
        protocol: 'https',
        hostname: 'eureka.coffee',
      },
      {
        protocol: 'https',
        hostname: 'thirdspace.id',
      },
      {
        protocol: 'https',
        hostname: 'layung.id',
      },
      {
        protocol: 'https',
        hostname: 'xinglong.id',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    unoptimized: false,
  },
  // Reduce transpilation overhead
  transpilePackages: [],
  // Optimize webpack
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    return config;
  },
}

module.exports = nextConfig
