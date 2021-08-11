const path = require(`path`);

// pages locale
exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;
  deletePage(page);
  // You can access the variable "locale" in your page queries now
  createPage({
    ...page,
    context: {
      ...page.context,
      locale: page.context.intl.language,
    },
  });
};

// Create  pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const projectTemplate = path.resolve(`src/templates/project.jsx`);
  const newsTemplate = path.resolve(`src/templates/news.jsx`);
  const result = await graphql(`
    query {
      allContentfulProject {
        edges {
          node {
            slug
          }
        }
      }
      news: allContentfulNews {
        edges {
          node {
            ctaLink
          }
        }
      }
    }
  `);

  result.data.news.edges.forEach((edge) => {
    const ctaLink = edge.node.ctaLink;
    if (ctaLink.startsWith('http')) return;

    createPage({
      path: ctaLink,
      component: newsTemplate,
      context: {
        slug: edge.node.ctaLink,
      },
    });
  });

  result.data.allContentfulProject.edges.forEach((edge) => {
    createPage({
      path: `${edge.node.slug}`,
      component: projectTemplate,
      context: {
        slug: edge.node.slug,
      },
    });
  });
};
