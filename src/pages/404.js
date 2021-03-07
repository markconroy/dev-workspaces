import { Link } from 'gatsby'
import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="layout-contained layout-contained--small padding-horizontal">
      <h1>404: Not Found</h1>
      <p>
        Sorry, the page you are looking for can't be found. Here's some options:
        <ul>
          <li>
            <Link to="/">Go to Home</Link>
          </li>
          <li>
            <Link to="/workspaces">View All Workspaces</Link>
          </li>
          <li>
            <Link to="/add">Add Your Workspace</Link>
          </li>
        </ul>
      </p>
    </div>
  </Layout>
)

export default NotFoundPage
