import React from 'react'

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
                    <a
                        href="https://github.com/xdebbie"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Github className="footer-icons github" alt="github" />
                    </a>
                    <a
                        href="https://linkedin.com/in/deborah-caldeira"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Linkedin
                            className="footer-icons linkedin"
                            alt="linkedin"
                        />
                    </a>
                    <a
                        href="https://medium.com/@ithos"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Medium className="footer-icons" alt="medium" />
                    </a>
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
