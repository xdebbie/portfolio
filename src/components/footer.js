import React from 'react'
import { Link } from 'gatsby'

// Socials
import Linkedin from '../assets/linkedin.svg'
import Github from '../assets/github.svg'
import Medium from '../assets/medium.svg'
// import Makerslate from '../assets/makerslate.svg'

const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <div className="socials">
                    <Link to="https://github.com/xdebbie">
                        <Github className="footer-icons github" alt="github" />
                    </Link>
                    <Link to="https://linkedin.com/in/deborah-caldeira">
                        <Linkedin
                            className="footer-icons linkedin"
                            alt="linkedin"
                        />
                    </Link>
                    <Link to="https://medium.com/@ithos">
                        <Medium className="footer-icons" alt="medium" />
                    </Link>
                    {/* <Link to="https://makerslate.io/deborah">
                        <Makerslate className="footer-icons" alt="makerslate" />
                    </Link> */}
                </div>
                <p>
                    © 2021 <span>kotka&bowie</span>
                </p>
            </div>
        </footer>
    )
}

export default Footer
