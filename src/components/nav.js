import { Link } from "gatsby"
import React, { Component } from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import Scrollspy from "react-scrollspy"

class Nav extends Component {
  getNavList = ({ mobile = false }) => (
    <div mobile={mobile}>
      <Scrollspy
        items={["banner", "about", "stack", "projects", "contact"]}
        currentClassName="current"
        mobile={mobile}
        offset={-104}
      ></Scrollspy>
    </div>
  )

  render() {
    return (
      <header>
        <div className="inner-header">
          <div className="logo">
            <AnchorLink href="#banner">DEBORAH CALDEIRA</AnchorLink>
          </div>
          <div className="navigation">
            <nav>
              <AnchorLink href="#about">About</AnchorLink>
              <AnchorLink href="#stack">Stack</AnchorLink>
              <AnchorLink href="#projects">Projects</AnchorLink>
              <AnchorLink href="#contact">Contact</AnchorLink>
            </nav>
          </div>
        </div>
      </header>
    )
  }
}

export default Nav
