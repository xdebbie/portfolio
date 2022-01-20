import React from 'react'

const Contact = () => {
    return (
        <div className="contact">
            <div className="container">
                <div className="contact-section">
                    <div className="title">
                        <h1>/contact</h1>
                    </div>
                    <div className="info">
                        <p>
                            <a
                                href="mailto: deh@live.in"
                                className="links"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                email
                            </a>
                        </p>
                        <p>
                            <a
                                href="https://github.com/xdebbie"
                                className="links"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                github
                            </a>
                        </p>
                        <p>
                            <a
                                href="https://medium.com/@ithos"
                                className="links"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                medium
                            </a>
                        </p>
                        <p>
                            <a
                                href="https://twitter.com/gitdebbie"
                                className="links"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                twitter
                            </a>
                        </p>
                        <p>
                            <a
                                href="https://linkedin.com/in/deborah-caldeira"
                                className="links"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                linkedin
                            </a>
                        </p>
                        {/* <p>
                            <a href="https://makerslate.io/deborah" className="links">
                                makerslate
                            </a>
                        </p> */}

                        <div className="address">
                            <div>
                                <p>Paris, France</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
