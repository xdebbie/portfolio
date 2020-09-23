import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import pencil from "../images/pencil.svg"
import albania from "../images/flags/albania.svg"
import argentina from "../images/flags/argentina.svg"
import brazil from "../images/flags/brazil.svg"
import bulgaria from "../images/flags/bulgaria.svg"
import denmark from "../images/flags/denmark.svg"
import estonia from "../images/flags/estonia.svg"
import finland from "../images/flags/finland.svg"
import france from "../images/flags/france.svg"
import israel from "../images/flags/israel.svg"
import italy from "../images/flags/italy.svg"
import japan from "../images/flags/japan.svg"
import norway from "../images/flags/norway.svg"
import portugal from "../images/flags/portugal.svg"
import romania from "../images/flags/romania.svg"
import russia from "../images/flags/russia.svg"
import spain from "../images/flags/spain.svg"
import sweden from "../images/flags/sweden.svg"
import ukraine from "../images/flags/ukraine.svg"
import uk from "../images/flags/united-kingdom.svg"
import usa from "../images/flags/united-states.svg"

const About = () => {
  return (
    <div id="about">
      <div className="container">
        <div className="about-section">
          <div className="title">
            <h1>/about</h1>
          </div>
          <p>
            My odd passport says March 29th, 19<span>*censored*</span>,
            Barcelona, Spain. I am however from... everywhere and nowhere. My
            story goes around the USA, Curacao, Argentina, Brazil, Spain,
            Romania, Estonia, the UK and France.
          </p>
          <p>
            I (probabaly) speak your language! I have done studies on English,
            Spanish, Portuguese, Italian, Catalan, French, Swedish, Danish,
            Finnish, Estonian, Russian and Romanian. I am also comfortable
            working with a variety of languages and alphabets including
            Cyrillic, the Ktav Ashuri, Kanji, Hiragana and Katakana - so don't
            be shy to ask me to develop your website in Russian, Hebrew or
            Japanese! I am also available for content writing.
          </p>

          <ul className="lang">
            <div className="lang-box">
              <li
                class="tooltip-toggle"
                aria-label="Do it do it do it do it do it do it"
                tabindex="0"
              >
                <img src={uk} className="flags" alt="uk" />
                <img src={usa} className="flags" alt="usa" />
                <p>English</p>
              </li>
              <li
                class="tooltip-toggle"
                aria-label="Yo habia puesto una rata morida aqui... y ya no esta"
                tabindex="0"
              >
                <img src={argentina} className="flags" alt="argentina" />
                <img src={spain} className="flags" alt="spain" />
                <p>Spanish</p>
              </li>
              <li
                class="tooltip-toggle"
                aria-label="L'ocasió s'ha d'agafar pels pèls"
                tabindex="0"
              >
                <img src={spain} className="flags" alt="spain" />
                <p>Catalan</p>
              </li>
              <li
                class="tooltip-toggle"
                aria-label="Antes que eu me esqueça: fora Bolsonaro!"
                tabindex="0"
              >
                <img src={portugal} className="flags" alt="portugal" />
                <img src={brazil} className="flags" alt="brazil" />
                <p>Portuguese</p>
              </li>
              <li
                class="tooltip-toggle"
                aria-label="Cest pas ma faulte"
                tabindex="0"
              >
                <img src={france} className="flags" alt="france" />
                <p>French</p>
              </li>
              <li
                class="tooltip-toggle"
                aria-label="Occidentali karma!"
                tabindex="0"
              >
                <img src={italy} className="flags" alt="italy" />
                <p>Italian</p>
              </li>
              <li
                class="tooltip-toggle"
                aria-label="Ingen fara på taket, jag är här!"
                tabindex="0"
              >
                <img src={sweden} className="flags" alt="sweden" />
                <p>Swedish</p>
              </li>
              <li
                class="tooltip-toggle"
                aria-label="Du skød papegøjen, jeg er her! Ansæt mig nu"
                tabindex="0"
              >
                <img src={denmark} className="flags" alt="denmark" />
                <p>Danish</p>
              </li>
              <li
                class="tooltip-toggle"
                aria-label="Du kom ikke hele veien for å bare stoppe og snu seg rundt"
                tabindex="0"
              >
                <img src={norway} className="flags" alt="norway" />
                <p>Norwegian</p>
              </li>
              <li
                class="tooltip-toggle"
                aria-label="Yo habia puesto una rata morida aqui... y ya no esta"
                tabindex="0"
              >
                <img src={estonia} className="flags" alt="estonia" />
                <p>Estonian</p>
              </li>
              <li
                class="tooltip-toggle"
                aria-label="Yo habia puesto una rata morida aqui... y ya no esta"
                tabindex="0"
              >
                <img src={finland} className="flags" alt="finland" />
                <p>Finnish</p>
              </li>
              <li
                class="tooltip-toggle"
                aria-label="Yo habia puesto una rata morida aqui... y ya no esta"
                tabindex="0"
              >
                <img src={romania} className="flags" alt="romania" />
                <p>Romanian</p>
              </li>
              <li
                class="tooltip-toggle"
                aria-label="Yo habia puesto una rata morida aqui... y ya no esta"
                tabindex="0"
              >
                <img src={albania} className="flags" alt="albania" />
                <p>Albanian</p>
              </li>
              <li
                class="tooltip-toggle"
                aria-label="Yo habia puesto una rata morida aqui... y ya no esta"
                tabindex="0"
              >
                <img src={russia} className="flags" alt="russia" />
                <p>Russian</p>
              </li>
              <li
                class="tooltip-toggle"
                aria-label="Yo habia puesto una rata morida aqui... y ya no esta"
                tabindex="0"
              >
                <img src={ukraine} className="flags" alt="ukraine" />
                <p>Ukrainian</p>
              </li>
              <li
                class="tooltip-toggle"
                aria-label="Yo habia puesto una rata morida aqui... y ya no esta"
                tabindex="0"
              >
                <img src={bulgaria} className="flags" alt="bulgaria" />
                <p>Bulgarian</p>
              </li>
              <li
                class="tooltip-toggle"
                aria-label="Yo habia puesto una rata morida aqui... y ya no esta"
                tabindex="0"
              >
                <img src={israel} className="flags" alt="israel" />
                <p>Hebrew</p>
              </li>
              <li
                class="tooltip-toggle"
                aria-label="Yo habia puesto una rata morida aqui... y ya no esta"
                tabindex="0"
              >
                <img src={japan} className="flags" alt="japan" />
                <p>Japanese</p>
              </li>
            </div>
          </ul>
        </div>
        <div className="education">
          <h2>Bla bla bla education</h2>
          <p>
            All you need to know about my studies is probably on my{" "}
            <a href="https://www.linkedin.com/in/deborah-caldeira/">LinkedIn</a>
            , so come over and stalk me! And while you are at it, also add me
            and send me a heya! If you are a former client, you are welcome to
            write me a recommendation as well{" "}
            <img src={pencil} className="text-icons" alt="pencil" />
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
