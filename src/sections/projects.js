import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Projects = () => {
  return (
    <div id="projects">
      <div className="container">
        <div className="projects-section">
          <div className="title">
            <h1>/projects</h1>
          </div>
          <ul>
            <li>
              Page under construction - in the meanwhile, please check my
              projects out on my
              <span>
                <a href="https://makerslate.io/deborah" className="url--hov">
                  makerslate
                </a>
              </span>
              .
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Projects
