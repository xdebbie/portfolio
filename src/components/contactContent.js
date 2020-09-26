import React from "react"

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
              <a href="mailto: deborah@asia.com" className="links">
                email
              </a>
            </p>
            <p>
              <a href="https://github.com/xdebbie" className="links">
                github
              </a>
            </p>
            <p>
              <a href="https://twitter.com/debishot" className="links">
                twitter
              </a>
            </p>
            <p>
              <a href="https://medium.com/@ithos" className="links">
                medium
              </a>
            </p>
            <p>
              <a
                href="https://linkedin.com/in/deborah-caldeira"
                className="links"
              >
                linkedin
              </a>
            </p>
            <p>
              <a href="https://makerslate.io/deborah" className="links">
                makerslate
              </a>
            </p>

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
