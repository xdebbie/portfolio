import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Code from "../assets/code.svg"
import Design from "../assets/design.svg"

const Stack = () => {
    const data = useStaticQuery(graphql`
    query {
        stack: file(relativePath: { eq: "stack.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 900, quality: 100) {
                    ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    return (
        <div id="stack">
            <div className="container">
                <div className="stack-section">
                    <div className="title">
                        <h1>/stack</h1>
                    </div>
                    <div className="stack-bowie">
                        <div className="stack-image">
                            <Img fluid={data.stack.childImageSharp.fluid} alt="stack" />
                        </div>
                        <p>My secretary, Bowie</p>
                    </div>
                    <div className="stack-boxes">
                        <div className="smaller-box">
                            <div className="stack-sect">
                                <Design className="stack-icons" alt="design" />
                                <p>Designer</p>
                                <ul>
                                    <li>UX</li>
                                    <li>UI</li>
                                    <li>Web</li>
                                    <li>Mobile</li>
                                    <li>Apps</li>
                                    <li>Logos</li>
                                </ul>
                            </div>
                            <div className="stack-sect">
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
                        </div>
                        <div className="smaller-box">
                            <div className="stack-sect">
                                <Code className="stack-icons" alt="code" />
                                <p>Developer</p>
                                <ul>
                                    <li>React</li>
                                    <li>GraphQL</li>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>Sass / Less</li>
                                    <li>JavaScript</li>
                                    <li>Node.js</li>
                                    <li>PHP</li>
                                    <li>Python</li>
                                    <li>C++</li>
                                    <li>Gatsby</li>
                                </ul>
                            </div>
                            <div className="stack-sect">
                                <p>Dev tools</p>
                                <ul>
                                    <li>Atom</li>
                                    <li>VSCode</li>
                                    <li>Bootstrap</li>
                                    <li>Codepen</li>
                                    <li>Github</li>
                                    <li>Gist</li>
                                    <li>npm</li>
                                    <li>Terminal</li>
                                    <li>Bash</li>
                                    <li>Vercel / Netlify / Heroku</li>
                                    <li>Contentful / Prismic</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stack
