import React from 'react'
// import Albania from '../assets/flags/albania.svg'
// import Argentina from '../assets/flags/argentina.svg'
// import Brazil from '../assets/flags/brazil.svg'
// import Bulgaria from '../assets/flags/bulgaria.svg'
// import Denmark from '../assets/flags/denmark.svg'
// import Estonia from '../assets/flags/estonia.svg'
// import Finland from '../assets/flags/finland.svg'
// import France from '../assets/flags/france.svg'
// import Israel from '../assets/flags/israel.svg'
// import Italy from '../assets/flags/italy.svg'
// import Japan from '../assets/flags/japan.svg'
// import Norway from '../assets/flags/norway.svg'
// import Portugal from '../assets/flags/portugal.svg'
// import Romania from '../assets/flags/romania.svg'
// import Russia from '../assets/flags/russia.svg'
// import Spain from '../assets/flags/spain.svg'
// import Sweden from '../assets/flags/sweden.svg'
// import Ukraine from '../assets/flags/ukraine.svg'
// import Uk from '../assets/flags/united-kingdom.svg'
// import Usa from '../assets/flags/united-states.svg'

const About = () => {
    return (
        <div id="about">
            <div className="container">
                <div className="about-section">
                    <div className="title">
                        <h1>/about</h1>
                    </div>
                    <p className="subtitle">roots</p>
                    <p>
                        I have lived in the USA, Curaçao, Argentina, Brazil,
                        Spain, Romania, Estonia, the UK, and I have chosen
                        France to settle down. I am comfortable with a lot of
                        languages
                    </p>
                    {/* <ul className="lang">
                        <div className="lang-box">
                            <li>
                                <Uk className="flags" alt="uk" />
                                <Usa className="flags" alt="usa" />
                                <span class="tooltip-text">english</span>
                            </li>
                            <li>
                                <Argentina className="flags" alt="argentina" />
                                <Spain className="flags" alt="spain" />
                                <span class="tooltip-text">spanish</span>
                            </li>
                            <li>
                                <Spain className="flags" alt="spain" />
                                <span class="tooltip-text">catalan</span>
                            </li>
                            <li>
                                <Portugal className="flags" alt="portugal" />
                                <Brazil className="flags" alt="brazil" />
                                <span class="tooltip-text">portuguese</span>
                            </li>
                            <li>
                                <France className="flags" alt="france" />
                                <span class="tooltip-text">french</span>
                            </li>
                            <li>
                                <Italy className="flags" alt="italy" />
                                <span class="tooltip-text">italian</span>
                            </li>
                            <li>
                                <Sweden className="flags" alt="sweden" />
                                <span class="tooltip-text">swedish</span>
                            </li>
                            <li>
                                <Denmark className="flags" alt="denmark" />
                                <span class="tooltip-text">danish</span>
                            </li>
                            <li>
                                <Norway className="flags" alt="norway" />
                                <span class="tooltip-text">norwegian</span>
                            </li>
                            <li>
                                <Estonia className="flags" alt="estonia" />
                                <span class="tooltip-text">estonian</span>
                            </li>
                            <li>
                                <Finland className="flags" alt="finland" />
                                <span class="tooltip-text">finnish</span>
                            </li>
                            <li>
                                <Romania className="flags" alt="romania" />
                                <span class="tooltip-text">romanian</span>
                            </li>
                            <li>
                                <Albania className="flags" alt="albania" />
                                <span class="tooltip-text">albanian</span>
                            </li>
                            <li>
                                <Russia className="flags" alt="russia" />
                                <span class="tooltip-text">russian</span>
                            </li>
                            <li>
                                <Ukraine className="flags" alt="ukraine" />
                                <span class="tooltip-text">ukrainian</span>
                            </li>
                            <li>
                                <Bulgaria className="flags" alt="bulgaria" />
                                <span class="tooltip-text">bulgarian</span>
                            </li>
                            <li>
                                <Israel className="flags" alt="israel" />
                                <span class="tooltip-text">hebrew</span>
                            </li>
                            <li>
                                <Japan className="flags" alt="japan" />
                                <span class="tooltip-text">japanese</span>
                            </li>
                        </div>
                    </ul> */}
                </div>
                <div className="about-section">
                    <p className="subtitle">education</p>
                    <p>
                        I have a background in industrial automation,
                        photography, audio engineering, accounting and finance
                        and computer science. I learn fast!
                    </p>
                </div>
                <div className="about-section">
                    <p className="subtitle">work</p>
                    <p>
                        I currently work at{' '}
                        <a
                            href="https://www.allowa.com"
                            target="_blank"
                            rel="noreferrer"
                            className="links"
                        >
                            allowa
                        </a>{' '}
                        as a full-stack engineer and I have previously worked at{' '}
                        <a
                            href="https://www.usefabriq.com"
                            target="_blank"
                            rel="noreferrer"
                            className="links"
                        >
                            fabriq
                        </a>{' '}
                        as a front-end engineer, after spending 9 years in the
                        music industry at the{' '}
                        <a
                            href="https://www.universalmusic.com"
                            target="_blank"
                            rel="noreferrer"
                            className="links"
                        >
                            Universal Music Group
                        </a>
                    </p>
                </div>
                <div className="about-section">
                    <p className="subtitle">interests</p>
                    <ul>
                        <li>rowing</li>
                        <li>gym</li>
                        <li>bass guitar</li>
                        <li>gin tonic</li>
                        <li>cats</li>
                    </ul>
                </div>
                <div className="about-section">
                    <p>
                        you can have a full breakdown of my hectic life on my{' '}
                        <a
                            href="https://www.linkedin.com/in/deborah-caldeira/"
                            target="_blank"
                            rel="noreferrer"
                            className="links"
                        >
                            linkedIn
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
