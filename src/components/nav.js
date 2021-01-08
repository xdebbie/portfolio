import React, { Component } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Scrollspy from 'react-scrollspy'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

class Nav extends Component {
    getNavList = ({ mobile = false }) => (
        <div mobile={mobile}>
            <Scrollspy
                items={['banner', 'about', 'stack', 'projects', 'contact']}
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
                            <ThemeToggler>
                                {({ theme, toggleTheme }) => (
                                    <div className="dark-button">
                                        <input
                                            type="checkbox"
                                            id="toggle"
                                            onChange={e =>
                                                toggleTheme(
                                                    e.target.checked
                                                        ? 'dark'
                                                        : 'light'
                                                )
                                            }
                                            checked={theme === 'dark'}
                                        />
                                        <label for="toggle">{}</label>
                                    </div>
                                )}
                            </ThemeToggler>
                        </nav>
                    </div>
                </div>
            </header>
        )
    }
}

export default Nav
