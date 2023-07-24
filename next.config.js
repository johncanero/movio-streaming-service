/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    swcPlugins: [["next-superjson-plugin", {}]],
  },
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "avatars.githubusercontent.com",
      "download.blender.org",
      "mango.blender.org",
      "uhdtv.io",
      "upload.wikimedia.org",
      "pictr.com",
    ],
  },
};

module.exports = nextConfig
