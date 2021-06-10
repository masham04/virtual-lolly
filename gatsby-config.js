module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "Lolly",
        fieldName: "getAllLollies",
        url: "https://mm-virtual-lolly.netlify.app/.netlify/functions/GraphQL",
      },
    },
  ],
}
