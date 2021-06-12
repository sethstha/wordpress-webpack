const { isProduction } = require("webpack-mode");

module.exports = function () {
  if (isProduction) {
    return require("./webpack/config.production");
  } else {
    return require("./webpack/config.development");
  }
};
