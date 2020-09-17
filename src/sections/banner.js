import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Banner = () => {
  const data = useStaticQuery(graphql`
    query {
      deb: file(relativePath: { eq: "deb1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div id="banner">
      <div className="container">
        <div className="image-left">
          <div className="profile-image">
            <Img fluid={data.deb.childImageSharp.fluid} />
          </div>
        </div>
        <div className="text-right">
          <div className="title">
            Ahoy! I'm <span>Deborah</span>.
          </div>
          <p>
            I am a <span>front end web developer</span> based in Paris, France.
            I am currently available for work - freelance, enterprise,
            collaborations, remote, you name it!
          </p>
        </div>
      </div>
      <div className="fixed-misc">Front end web developer</div>
    </div>
  )
}

export default Banner
