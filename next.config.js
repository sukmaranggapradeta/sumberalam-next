const path = require("path");

module.exports = {
  trailingSlash: true,
  images: {
    domains: ["github.com"], //ini biar bisa akses gambar dimana disimpan
  },
  assetPrefix: ".", // ini biar css nya kebaca
  webpack: config => {
    config.resolve.modules.push(path.resolve("./")); //ini apa buat?

    return config;
  },
};
