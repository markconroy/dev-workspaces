/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

import path from 'path'

// Grab list of dev workspaces and create pages from them.
async function turnDevWorkspacesIntoPages({ graphql, actions }) {
  // 1. Get a template for this page
  const devWorkspacesTemplate = path.resolve(
    './src/templates/DevWorkspace.js'
  )
  // 2. Query all workspaces
  const { data } = await graphql(`
    query {
      devWorkspaces: allMarkdownRemark {
        edges {
          node {
            id
          }
        }
      }
    }
  `)
  // 3. Loop over each blog and create a page for it.
  data.devWorkspaces.edges.forEach(devWorkspace => {
    actions.createPage({
      path: `${devWorkspace.node.id}`,
      component: devWorkspacesTemplate,
      context: {
        slug: `${devWorkspace.node.id}`,
      },
    })
  })
}

export async function createPages(params) {
  // Create pages dynamically
  // Wait for all promises to be resolved before finishing this function.
  await Promise.all([
    turnDevWorkspacesIntoPages(params),
  ])
}
