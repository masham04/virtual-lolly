const path = require(`path`)

exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query MyQuery {
      Lollies {
        getAllLollies {
          lollyPath
        }
      }
    }
  `)
  data.Lollies.getAllLollies.forEach(({ lollyPath }) => {
    actions.createPage({
      path: `lollies/${lollyPath}`,
      component: path.resolve(`./src/components/dynamicPage/template.jsx`),
      context: {
        lollyPath: lollyPath,
      },
    })
  })
}