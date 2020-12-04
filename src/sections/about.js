import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Albania from "../assets/flags/albania.svg"
import Argentina from "../assets/flags/argentina.svg"
import Brazil from "../assets/flags/brazil.svg"
import Bulgaria from "../assets/flags/bulgaria.svg"
import Denmark from "../assets/flags/denmark.svg"
import Estonia from "../assets/flags/estonia.svg"
import Finland from "../assets/flags/finland.svg"
import France from "../assets/flags/france.svg"
import Israel from "../assets/flags/israel.svg"
import Italy from "../assets/flags/italy.svg"
import Japan from "../assets/flags/japan.svg"
import Norway from "../assets/flags/norway.svg"
import Portugal from "../assets/flags/portugal.svg"
import Romania from "../assets/flags/romania.svg"
import Russia from "../assets/flags/russia.svg"
import Spain from "../assets/flags/spain.svg"
import Sweden from "../assets/flags/sweden.svg"
import Ukraine from "../assets/flags/ukraine.svg"
import Uk from "../assets/flags/united-kingdom.svg"
import Usa from "../assets/flags/united-states.svg"

const About = () => {
    return (
        <div id="about">
            <div className="container">
                <div className="about-section">
                    <div className="title">
                        <h1>/about</h1>
                    </div>
                    <p>
                        I am from everywhere and nowhere. I have been around the USA, Curacao, Argentina, Brazil, Spain, Romania, Estonia, the UK, and I have chosen France to settle down.
                    </p>
                    <p>
                        I (probabaly) speak your language! I have done studies on English, Spanish, Portuguese, Italian, Catalan, French, Swedish, Danish, Finnish, Estonian, Russian and Romanian. I am also comfortable working with a variety of languages and alphabets including Cyrillic, the Ktav Ashuri, Kanji, Hiragana and Katakana - so don't be shy to ask me to develop your website in Russian, Hebrew or Japanese! I am also available for{" "}<Link to="https://www.medium.com/@ithos" className="links">{" "} content writing</Link>.
                    </p>

                    <ul className="lang">
                        <div className="lang-box">
                            <li
                                class="tooltip-toggle"
                                aria-label="Do it do it do it do it do it do it"
                                tabindex="0"
                            >
                                <Uk className="flags" alt="uk" />
                                <Usa className="flags" alt="usa" />
                                <p>English</p>
                            </li>
                            <li
                                class="tooltip-toggle"
                                aria-label="[cries in Spanish]"
                                tabindex="0"
                            >
                                <Argentina className="flags" alt="argentina" />
                                <Spain className="flags" alt="spain" />
                                <p>Spanish</p>
                            </li>
                            <li
                                class="tooltip-toggle"
                                aria-label="L'ocasió s'ha d'agafar pels pèls"
                                tabindex="0"
                            >
                                <Spain className="flags" alt="spain" />
                                <p>Catalan</p>
                            </li>
                            <li
                                class="tooltip-toggle"
                                aria-label="Antes que eu me esqueça: fora Bolsonaro!"
                                tabindex="0"
                            >
                                <Portugal className="flags" alt="portugal" />
                                <Brazil className="flags" alt="brazil" />
                                <p>Portuguese</p>
                            </li>
                            <li class="tooltip-toggle" aria-label="#" tabindex="0">
                                <France className="flags" alt="france" />
                                <p>French</p>
                            </li>
                            <li class="tooltip-toggle" aria-label="#" tabindex="0">
                                <Italy className="flags" alt="italy" />
                                <p>Italian</p>
                            </li>
                            <li
                                class="tooltip-toggle"
                                aria-label="Ingen fara på taket, jag är här!"
                                tabindex="0"
                            >
                                <Sweden className="flags" alt="sweden" />
                                <p>Swedish</p>
                            </li>
                            <li
                                class="tooltip-toggle"
                                aria-label="Du skød papegøjen, jeg er her! Ansæt mig nu"
                                tabindex="0"
                            >
                                <Denmark className="flags" alt="denmark" />
                                <p>Danish</p>
                            </li>
                            <li
                                class="tooltip-toggle"
                                aria-label="Du kom ikke hele veien for å bare stoppe og snu seg rundt"
                                tabindex="0"
                            >
                                <Norway className="flags" alt="norway" />
                                <p>Norwegian</p>
                            </li>
                            <li class="tooltip-toggle" aria-label="#" tabindex="0">
                                <Estonia className="flags" alt="estonia" />
                                <p>Estonian</p>
                            </li>
                            <li class="tooltip-toggle" aria-label="#" tabindex="0">
                                <Finland className="flags" alt="finland" />
                                <p>Finnish</p>
                            </li>
                            <li class="tooltip-toggle" aria-label="#" tabindex="0">
                                <Romania className="flags" alt="romania" />
                                <p>Romanian</p>
                            </li>
                            <li class="tooltip-toggle" aria-label="#" tabindex="0">
                                <Albania className="flags" alt="albania" />
                                <p>Albanian</p>
                            </li>
                            <li class="tooltip-toggle" aria-label="#" tabindex="0">
                                <Russia className="flags" alt="russia" />
                                <p>Russian</p>
                            </li>
                            <li class="tooltip-toggle" aria-label="#" tabindex="0">
                                <Ukraine className="flags" alt="ukraine" />
                                <p>Ukrainian</p>
                            </li>
                            <li class="tooltip-toggle" aria-label="#" tabindex="0">
                                <Bulgaria className="flags" alt="bulgaria" />
                                <p>Bulgarian</p>
                            </li>
                            <li class="tooltip-toggle" aria-label="#" tabindex="0">
                                <Israel className="flags" alt="israel" />
                                <p>Hebrew</p>
                            </li>
                            <li class="tooltip-toggle" aria-label="#" tabindex="0">
                                <Japan className="flags" alt="japan" />
                                <p>Japanese</p>
                            </li>
                        </div>
                    </ul>
                </div>
                <div className="education">
                    <h2>Bla bla bla education</h2>
                    <p>
                        All you need to know about my studies is probably on my{" "}
                        <a
                            href="https://www.linkedin.com/in/deborah-caldeira/"
                            className="links"
                        >
                            LinkedIn
                        </a>
                        , so come over and add me there!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
