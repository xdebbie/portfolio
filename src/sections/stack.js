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
          <div className="stack-boxes">
            <div className="designer">
              <p>Designer</p>
              <ul>
                <li>UX</li>
                <li>UI</li>
                <li>Web</li>
                <li>Mobile</li>
                <li>Apps</li>
                <li>Logos</li>
              </ul>
              <p>Design tools</p>
              <ul>
                <li>Figma</li>
                <li>Invision</li>
                <li>Adobe XD</li>
                <li>Adobe Illustrator</li>
                <li>Adobe InDesign</li>
                <li>Adobe Lightroom</li>
                <li>Adobe Photoshop</li>
                <li>Webflow</li>
                <li>Zeplin</li>
                <li>Marvel</li>
                <li>Sketch</li>
              </ul>
            </div>
            <div className="developer">
              <p>Front end developer</p>
              <ul>
                <li>React</li>
                <li>GraphQL</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Sass/SCSS</li>
                <li>JavaScript</li>
                <li>Gatsby</li>
              </ul>
              <p>Dev tools</p>
              <ul>
                <li>Atom</li>
                <li>VSCode</li>
                <li>Bootstrap</li>
                <li>Codepen</li>
                <li>Github</li>
                <li>Gist</li>
                <li>Terminal</li>
                <li>Bash</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stack
