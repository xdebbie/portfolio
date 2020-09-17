import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const About = () => {
  return (
    <div id="about">
      <div className="container">
        <div className="about-section">
          <div className="title">
            <h1>/about</h1>
          </div>
          <p>
            I am originally from... everywhere and nowhere, at the same time. My
            story goes around the USA, Argentina, Brazil, Spain, Romania,
            Estonia, the UK and France.
          </p>
          <p>
            I (probabaly) speak your language! I have had studies on English,
            Spanish, Portuguese, Italian, Catalan, French, Swedish, Danish,
            Finnish, Estonian, Russian and Romanian. I am also comfortable
            working with a variety of languages and alphabets including
            Cyrillic, the Ktav Ashuri, Kanji, Hiragana and Katakana - so don't
            be shy to ask me to develop your website in Russian, Hebrew or
            Japanese!
          </p>
          <p>
            Currently based in Paris, France, I am available for work both
            locally and remotely.
          </p>
          <div className="education">
            <h2>Education</h2>
            <p>The University of Illinois in Urbana-Champaign</p>
            <p>Industrial IT and Automation</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
