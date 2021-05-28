

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "Lolly",
        fieldName: "Lollies",
        url: "http://localhost:8888/.netlify/functions/virtualLolly",
      },
    },
  ],
}
