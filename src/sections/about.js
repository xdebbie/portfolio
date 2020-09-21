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
            I am originally from... everywhere and nowhere. My story goes around
            the USA, Argentina, Brazil, Spain, Romania, Estonia, the UK and
            France.
          </p>
          <p>
            I (probabaly) speak your language! I have done studies on English,
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
            <h2>Formal education</h2>
            <p>
              My education background probably won't tell you anything relevant
              except that I like to study, lol
            </p>
            <p>The University of Illinois in Urbana-Champaign</p>
            <p>Industrial Information Technology and Automation</p>

            <p>Middlesex University / SAE Institute Spain</p>
            <p>BA in Audio Production and Recording Arts</p>

            <p>Tallinna Tehnikaulikool</p>
            <p>BA in Social Sciences, major in Accounting and Finance</p>

            <p>The London School of Economics and Political Science (LSE)</p>
            <p>MSc in Accounting and Finance, major in Finance</p>
          </div>
          <div className="programming">
            <h2>Programming shenanigans</h2>
            <p>Sun Microsystems</p>
            <p>Applied Java for Industrial Automation Purposes</p>

            <p>Oxford University</p>
            <p>BA in Audio Production and Recording Arts</p>

            <p>University of Helsinki</p>
            <p>BA in Social Sciences, major in Accounting and Finance</p>

            <p>3W Academy</p>
            <p>Front end web development</p>

            <p>Harvard University's Extension School</p>
            <p>
              Professional Certificate Program in Computer Science and Mobile
              Apps
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
