export const module = {
  resolve: {
    extensions: [".ts", ".js"],
  },
  rules: [
    {
      test: /\.svg$/,
      use: ["@svgr/webpack", "url-loader"],
    },
    {
      test: /\.pdf$/,
      type: "asset/resource",
      generator: {
        filename: "assets/pdf/[name].[hash][ext]",
      },
    },
  ],
};
