const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    // If you use remark-gfm, you'll need to use next.config.mjs
    // as the package is ESM only
    // https://github.com/remarkjs/remark-gfm#install
    remarkPlugins: [],
    rehypePlugins: [],
    providerImportSource: "@mdx-js/react",
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // swcMinify: true,
  images: {
    domains: ["1stwebdesigner.com"],
  },
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  env: {
    PASSWORD_PROTECT: true,
  },
};

module.exports = withMDX(nextConfig);
