const path = require(`path`)

exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query MyQuery {
       
        getAllLollies {
          lollyPath
        }
      
    }
  `)
  console.log(data)
  data.getAllLollies.forEach(({ lollyPath }) => {
    actions.createPage({
      path: `lollies/${lollyPath}`,
      component: path.resolve(`./src/components/dynamicPage/template.jsx`),
      context: {
        lollyPath: lollyPath,
      },
    })
  })
}