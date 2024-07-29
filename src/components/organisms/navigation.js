import PropTypes from "prop-types"
import React from "react"
import Logo from "@atoms/logo"
import styled from "styled-components"
import Link from "@atoms/link"
import { media } from "@utils/media"

const Navigation = () => (
  <Nav>
    <Logo />
  </Nav>
)

Navigation.propTypes = {
  siteTitle: PropTypes.string,
}

Navigation.defaultProps = {
  siteTitle: ``,
}

export default Navigation

const Nav = styled.nav`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  padding: 2rem;
  position: absolute;
  top: 0;
  width: 100vw;
  z-index: 1000;
  flex-wrap: wrap;
`

const NavLinks = styled.ul`
  display: flex;
  justify-content: flex-start;
  list-style: none;
  margin: 0;
  padding-left: 0;
  padding-top: 2rem;

  @media ${media.lg} {
    padding-left: 2rem;
    padding-top: 0;
  }

  li {
    margin: 0;

    a {
      font-size: 16px;
    }
  }
`

const NavLink = styled(Link)`
  margin-right: 2rem;
`
