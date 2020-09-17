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
            <li>React</li>
            <li>GraphQL</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Sass/SCSS</li>
            <li>JavaScript</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Projects
