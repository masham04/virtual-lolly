exports.onCreatePage = async ({ page, actions }) => {
    const { createPage } = actions;
 
  if (page.path.match(/^\/lollies/)) {
    console.log("Page Created")
     page.matchPath = "/lollies/*";
     createPage(page);
   }}