import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Aesthetic from '../assets/manicure.svg'
import Pixelperfect from '../assets/pixel.svg'
import Maintainability from '../assets/broom.svg'
import Scalability from '../assets/lego.svg'
import Responsiveness from '../assets/chameleon.svg'

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
                        I am a <span>front-end web developer</span> based in
                        Paris, France. I am currently working at{' '}
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
                    <h2>
                        This is what you will get with me... look no further!
                    </h2>
                    <ul>
                        <li>
                            <Aesthetic className="att-icons" alt="aesthetic" />
                            <p className="att-title">Aesthetic</p>
                            <p>
                                I like it pretty, that is non-negotiable! And
                                your customers will like it too
                            </p>
                        </li>
                        <li>
                            <Pixelperfect
                                className="att-icons"
                                alt="pixel perfect"
                            />
                            <p>Pixel-perfect</p>
                            <p>
                                My OCD will guarantee your designs are always
                                presented faultlessly
                            </p>
                        </li>
                        <li>
                            <Maintainability
                                className="att-icons"
                                alt="maintainability"
                            />
                            <p>Maintainability</p>
                            <p>
                                Easy to maintain, all my websites come with
                                extensive comments and instructions so you can
                                keep it up and running for a long time
                            </p>
                        </li>
                        <li>
                            <Scalability
                                className="att-icons"
                                alt="scalability"
                            />
                            <p>Scalability</p>
                            <p>
                                Structured in a smart way, it is really simple
                                to just add a new page or section
                            </p>
                        </li>
                        <li>
                            <Responsiveness
                                className="att-icons"
                                alt="responsiveness"
                            />
                            <p>Responsiveness</p>
                            <p>
                                Mobile, tablet, desktop, super-large screens,
                                dark mode? I've got your back
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Banner
