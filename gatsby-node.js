const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'MarkdownRemark') {
    let slug = createFilePath({ node, getNode, basePath: 'content' });
    const lang = slug.slice(1, 3);
    slug = slug.slice(4);
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
    createNodeField({
      node,
      name: 'lang',
      value: lang,
    });
  }
};

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const pages = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              lang
              slug
            }
            frontmatter {
              type
            }
          }
        }
      }
    }
  `);

  if (pages.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query - markdown pages`);
    return;
  }

  pages.data.allMarkdownRemark.edges.forEach(edge => {
    const prefix =
      edge.node.fields.lang === 'pl' ? '' : edge.node.fields.lang + '/';
    createPage({
      path: prefix + edge.node.fields.slug,
      component: path.resolve(
        `./src/components/templates/${edge.node.frontmatter.type}.js`
      ),
      context: {
        slug: edge.node.fields.slug,
        nodeLocale: edge.node.fields.lang,
      },
    });
  });
};
