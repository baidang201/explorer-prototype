module.exports = {
  flags: {
    DEV_SSR: true
  },
  siteMetadata: {
    title: "otco-explorer",
  },
  plugins: [
  // Simple config, passing URL
    {
      resolve: "gatsby-source-graphql",
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: "SWAPI",
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: "swapi",
        // Url to query from
        url: "http://18.220.126.27:3000/",
      },
    },
    "gatsby-plugin-use-query-params",

    ],
};
