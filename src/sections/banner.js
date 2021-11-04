import React from 'react'
// import { useStaticQuery, graphql } from 'gatsby'
// import Img from 'gatsby-image'
import Aesthetic from '../assets/manicure.svg'
import Pixelperfect from '../assets/pixel.svg'
import Maintainability from '../assets/broom.svg'
import Scalability from '../assets/lego.svg'
import Responsiveness from '../assets/chameleon.svg'
import Rigorous from '../assets/target.svg'

const Banner = () => {
    // const data = useStaticQuery(graphql`
    //     query {
    //         deb: file(relativePath: { eq: "deb1.jpg" }) {
    //             childImageSharp {
    //                 fluid(maxWidth: 300) {
    //                     ...GatsbyImageSharpFluid
    //                 }
    //             }
    //         }
    //     }
    // `)

    return (
        <div id="banner">
            <div className="container">
                {/* <div className="image-left">
                    <div className="profile-image">
                        <Img fluid={data.deb.childImageSharp.fluid} />
                    </div>
                </div> */}
                <div className="hero">
                    <div className="title">
                        Ahoy! I'm <span>Deborah</span>.
                    </div>
                    <p>
                        I am a front-end web developer based in Paris, France. I
                        am currently working at{' '}
                        <a
                            href="https://www.allowa.com"
                            target="_blank"
                            rel="noreferrer"
                            className="links"
                        >
                            Allowa
                        </a>
                        .
                    </p>
                </div>
                <div className="attributes">
                    <p className="subtitle">
                        this is what you will get with me... look no further!
                    </p>
                    <ul>
                        <li>
                            <div>
                                <Aesthetic
                                    className="att-icons"
                                    alt="aesthetic"
                                />
                                <p className="att-title">aesthetic</p>
                            </div>
                            <p>
                                I like it pretty, that is non-negotiable! And
                                your customers will like it too
                            </p>
                        </li>
                        <li>
                            <div>
                                <Pixelperfect
                                    className="att-icons"
                                    alt="pixel perfect"
                                />
                                <p className="att-title">pixel-perfect</p>
                            </div>
                            <p>
                                my OCD will guarantee your designs are always
                                presented faultlessly
                            </p>
                        </li>
                        <li>
                            <div>
                                <Maintainability
                                    className="att-icons"
                                    alt="maintainability"
                                />
                                <p className="att-title">maintainability</p>
                            </div>
                            <p>
                                easy to maintain, all my websites come with
                                extensive comments and instructions so you can
                                keep it up and running for a long time
                            </p>
                        </li>
                        <li>
                            <div>
                                <Scalability
                                    className="att-icons"
                                    alt="scalability"
                                />
                                <p className="att-title">scalability</p>
                            </div>
                            <p>
                                structured in a smart way, it is really simple
                                to just add a new page or section
                            </p>
                        </li>
                        <li>
                            <div>
                                <Responsiveness
                                    className="att-icons"
                                    alt="responsiveness"
                                />
                                <p className="att-title">responsiveness</p>
                            </div>
                            <p>
                                mobile, tablet, desktop, super-large screens,
                                dark mode? I've got your back
                            </p>
                        </li>
                        <li>
                            <div>
                                <Rigorous
                                    className="att-icons"
                                    alt="rigorous testing"
                                />
                                <p className="att-title">rigorous testing</p>
                            </div>
                            <p>
                                I ensure your website is of excellent quality by
                                thoroughly testing using multiple approaches
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Banner
