const path = require("path");

module.exports = {
  entry: "./src/index.js", // Entry point of your client-side code
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"), // Output directory for bundled code
  },
};
