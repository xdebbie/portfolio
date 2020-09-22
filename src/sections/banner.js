import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import aesthetic from "../images/manicure.svg"
import pixelperfect from "../images/pixel.svg"
import maintainability from "../images/broom.svg"
import scalability from "../images/lego.svg"
import responsiveness from "../images/chameleon.svg"

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
        <div className="attributes">
          <h2>This is what you will get with me... look no further!</h2>
          <ul>
            <li>
              <img src={aesthetic} className="att-icons" alt="aesthetic" />
              <p className="att-title">Aesthetic</p>
              <p>
                I like it pretty, that is non-negotiable! And your customers
                will like it too
              </p>
            </li>
            <li>
              <img
                src={pixelperfect}
                className="att-icons"
                alt="pixel perfect"
              />
              <p>Pixel-perfect</p>
              <p>
                My OCD will guarantee your designs are always presented
                faultlessly
              </p>
            </li>
            <li>
              <img
                src={maintainability}
                className="att-icons"
                alt="maintainability"
              />
              <p>Maintainability</p>
              <p>
                Easy to maintain, all my websites come with extensive comments
                and instructions so you can keep it up and running for a long
                time
              </p>
            </li>
            <li>
              <img src={scalability} className="att-icons" alt="scalability" />
              <p>Scalability</p>
              <p>
                Structured in a smart way, it is really simple to just add a new
                page or section
              </p>
            </li>
            <li>
              <img
                src={responsiveness}
                className="att-icons"
                alt="responsiveness"
              />
              <p>Responsiveness</p>
              <p>
                Mobile, tablet, desktop, super-large screens, dark mode? I've
                got your back
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Banner
