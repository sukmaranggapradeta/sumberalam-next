const path = require("path");

module.exports = {
  images: {
    domains: ["github.com"],
  },
  webpack: config => {
    config.resolve.modules.push(path.resolve("./"));

    return config;
  },
};
