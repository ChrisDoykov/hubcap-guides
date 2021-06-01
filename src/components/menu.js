import React from "react"
import { Link } from "gatsby"

const Menu = () => (
  <div>
    <ul
      style={{
        backgroundColor: "black",
        listStyle: "none",
        margin: "0 auto",
        padding: "1rem 0",
        fontWeight: "bold",
        marginBottom: "2rem",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
      }}
    >
      <li>
        <Link
          style={{
            color: "white",
            textDecoration: "none",
          }}
          to="/"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          style={{
            color: "white",
            textDecoration: "none",
          }}
          to="/blog"
        >
          Blog
        </Link>
      </li>
      <li>
        <Link
          style={{
            color: "white",
            textDecoration: "none",
          }}
          to="/services"
        >
          Services
        </Link>
      </li>
      <li>
        <Link
          style={{
            color: "white",
            textDecoration: "none",
          }}
          to="/about"
        >
          About
        </Link>
      </li>
    </ul>
  </div>
)

export default Menu
