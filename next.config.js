/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["pixner.net", "res.cloudinary.com"],
    },
    swcMinify: true,

}

module.exports = nextConfig
