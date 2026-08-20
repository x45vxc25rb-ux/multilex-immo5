/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  staticPageGenerationTimeout: 120,
  images: {
    // Разрешённые внешние источники изображений можно добавить сюда,
    // если фотографии объектов будут храниться не локально, а на CDN.
    // Пример: remotePatterns: [{ protocol: 'https', hostname: 'images.multilex.de' }]
  },
};

module.exports = nextConfig;
