const { createFilePath } = require("gatsby-source-filesystem");
const path = require(`path`);

// This creates a field called `slug` for us to access in every markdown files source tree
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({
      node,
      getNode,
      basePath: `content/blog/`,
      trailingSlash: false,
    });

    createNodeField({
      node,
      name: `slug`,
      value: `/blog${slug}`,
    });
  }
};

// Happens only after the adding of file nodes and updating of the Graphql schema so it can query
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`src/templates/blog-post.jsx`);
  const blogShareTemplate = path.resolve(`src/templates/blog-share-image.jsx`);

  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  // console.log(JSON.stringify(result, null, 2));

  const posts = result.data.allMarkdownRemark.edges;

  // Create blog post pages
  posts.forEach((post, index) => {
    createPage({
      // Path for the page
      path: post.node.fields.slug,
      component: blogPostTemplate,
      context: {
        // This is inserted as prop to page component
        slug: post.node.fields.slug,
      },
    });

    // Create OG image for each blog post
    if (process.env.NODE_ENV === "development") {
      createPage({
        path: `${post.node.fields.slug}/og_image`,
        component: blogShareTemplate,
        context: {
          slug: post.node.fields.slug,
        },
      });
    }
  });
};
