import React from 'react'
import { Link } from 'gatsby'

export default function MenuItems() {
  return (
    <ul>
      <li>
        <Link
          className="menu-link"
          activeClassName="menu-link--active"
          to="/services"
          partiallyActive
        >
          Services
        </Link>
      </li>
      <li>
        <Link
          className="menu-link"
          activeClassName="menu-link--active"
          to="/case-studies"
          partiallyActive
        >
          Our Work
        </Link>
      </li>
      <li>
        <Link
          className="menu-link"
          activeClassName="menu-link--active"
          to="/about"
          partiallyActive
        >
          Our Story
        </Link>
      </li>
      <li>
        <Link
          className="menu-link"
          activeClassName="menu-link--active"
          to="/blog"
          partiallyActive
        >
          Blog
        </Link>
      </li>
      <li>
        <Link
          className="menu-link"
          activeClassName="menu-link--active"
          to="/contact"
          partiallyActive
        >
          Contact
        </Link>
      </li>
    </ul>
  )
}
