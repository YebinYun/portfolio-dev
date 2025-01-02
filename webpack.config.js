export const module = {
  resolve: {
    extensions: [".ts", ".js"],
  },
  rules: [
    {
      test: /\.svg$/,
      use: ["@svgr/webpack", "url-loader"],
    },
  ],
};
