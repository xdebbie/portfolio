import React from 'react'
// import { useStaticQuery, graphql } from 'gatsby'
// import Img from 'gatsby-image'

const Stack = () => {
    // const data = useStaticQuery(graphql`
    //     query {
    //         stack: file(relativePath: { eq: "stack.jpg" }) {
    //             childImageSharp {
    //                 fluid(maxWidth: 900, quality: 100) {
    //                     ...GatsbyImageSharpFluid
    //                 }
    //             }
    //         }
    //     }
    // `)

    return (
        <div id="stack">
            <div className="container">
                <div className="stack-section">
                    <div className="title">
                        <h1>/stack</h1>
                    </div>
                    {/* <div className="stack-bowie">
                        <div className="stack-image">
                            <Img
                                fluid={data.stack.childImageSharp.fluid}
                                alt="stack"
                            />
                        </div>
                        <p>My secretary, Bowie</p>
                    </div> */}
                    <div className="stack-boxes">
                        <div className="subsection">
                            <p>dev</p>
                            <div>
                                <ul>
                                    <li>React</li>
                                    <li>Typescript</li>
                                    <li>JavaScript</li>
                                    <li>GraphQL</li>
                                    <li>Node.js</li>
                                    <li>Postgresql</li>
                                    <li>MongoDB</li>
                                    <li>PHP</li>
                                    <li>Python</li>
                                    <li>C++</li>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>Sass/Less</li>
                                    <li>Next/Gatsby</li>
                                </ul>
                                <ul>
                                    <li>Atom</li>
                                    <li>VSCode</li>
                                    <li>Bootstrap</li>
                                    <li>Github/Gitlab</li>
                                    <li>Gist</li>
                                    <li>npm/yarn</li>
                                    <li>Terminal</li>
                                    <li>Bash</li>
                                    <li>Vercel/Netlify/Heroku</li>
                                    <li>Contentful/Prismic</li>
                                </ul>
                            </div>
                        </div>
                        <div className="subsection">
                            <p>design</p>
                            <div>
                                <ul>
                                    <li>UX</li>
                                    <li>UI</li>
                                    <li>Web</li>
                                    <li>Mobile</li>
                                    <li>Apps</li>
                                    <li>Logos</li>
                                </ul>
                                <ul>
                                    <li>Figma</li>
                                    <li>Invision</li>
                                    <li>Adobe XD</li>
                                    <li>Adobe Illustrator</li>
                                    <li>Adobe InDesign</li>
                                    <li>Adobe Lightroom</li>
                                    <li>Adobe Photoshop</li>
                                    <li>Webflow</li>
                                    <li>Sketch</li>
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
