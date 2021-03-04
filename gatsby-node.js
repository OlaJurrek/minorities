exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const minorityPage = require.resolve(
    `./src/components/templates/minority.js`
  );
  const result = await graphql(`
    {
      allMarkdownRemark(
        filter: { frontmatter: { type: { in: "single-minority" } } }
      ) {
        edges {
          node {
            frontmatter {
              path
              title
              titleAddition
            }
            html
          }
        }
      }
    }
  `);
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query - minorities md.`);
    return;
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: minorityPage,
      context: {
        // additional data can be passed via context
        slug: node.frontmatter.path,
      },
    });
  });
};
