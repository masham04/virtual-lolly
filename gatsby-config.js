module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: "gatsby-source-graphql",
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: "GETLOLLY",
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: "getAllLollies",
        // Url to query from
        url: "https://mm-virtual-lolly.netlify.app//.netlify/functions/GraphQL",
      },
    },
  ],
}
