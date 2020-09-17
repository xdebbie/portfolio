import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Stack = () => {
  return (
    <div id="stack">
      <div className="container">
        <div className="stack-section">
          <div className="title">
            <h1>/stack</h1>
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

export default Stack
