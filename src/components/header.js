import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle }) => (
  <header className="header">
    <div className="header__container">
      <StaticImage
        className="header__logo"
        src="../images/logo_hubcap.png"
        alt="HUBCAP Logo"
      />
      <h1 className="header__title">
        <Link to="/" className="header__title__link">
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
