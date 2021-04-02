const path = require("path");

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const minorityTemplate = path.resolve(
    `./src/components/templates/minority.js`
  );
  const minorityPages = await graphql(`
    {
      allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "single-minority" } } }
      ) {
        edges {
          node {
            frontmatter {
              path
              language
            }
          }
        }
      }
    }
  `);

  if (minorityPages.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query - minorities md.`);
    return;
  }

  minorityPages.data.allMarkdownRemark.edges.forEach(edge => {
    const prefix =
      edge.node.frontmatter.language.toLowerCase() === "pl"
        ? ""
        : edge.node.frontmatter.language.toLowerCase();
    createPage({
      path: prefix + "/" + edge.node.frontmatter.path,
      component: minorityTemplate,
      context: {
        slug: edge.node.frontmatter.path,
        nodeLocale: edge.node.frontmatter.language,
      },
    });
  });
};
