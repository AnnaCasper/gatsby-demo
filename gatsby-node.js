exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allContentfulPage {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  data.allContentfulPage.edges.forEach(edge => {
    const slug = edge.node.slug
    actions.createPage({
      path: slug,
      component: require.resolve(`./src/pages/index.js`),
      context: { slug: slug },
    })
  })
}