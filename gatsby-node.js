exports.onCreatePage = async ({ page, actions }) => {
    const { createPage } = actions;

    if (page.path.match(/^\/lollies/)) {
        console.log(page.path)
        page.matchPath = "/lollies/*";
        createPage(page);
    }
}