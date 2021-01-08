import React from 'react'
import Collapsible from '../components/collapsible'
import Lightbox from '../components/lightbox'

// Assets
import Pacific from '../images/projects/pacific.png'
import Forkked from '../images/projects/forkked.png'
import Hannah from '../images/projects/hannah.jpeg'
import Kotka from '../images/projects/ekotka.jpg'
import {
    photosForkked,
    photosPacific,
    photosHannah,
    photosKotka,
} from '../components/photos'

const Projects = () => {
    return (
        <div id="projects">
            <div className="container">
                <div className="projects-section">
                    <div className="title">
                        <h1>/projects</h1>
                    </div>
                    <div className="projects__header">
                        <p>
                            I currently work at{' '}
                            <a
                                href="https://www.allowa.com"
                                target="_blank"
                                className="links"
                            >
                                Allowa
                            </a>{' '}
                            as a full stack engineer and have previously worked
                            at{' '}
                            <a
                                href="https://www.usefabriq.com"
                                target="_blank"
                                className="links"
                            >
                                fabriq
                            </a>{' '}
                            as a front end engineer, as well as managed my
                            e-commerce{' '}
                            <a
                                href="https://www.ekotka.com"
                                target="_blank"
                                className="links"
                            >
                                Evergreen & Kotka
                            </a>{' '}
                            .
                        </p>
                        <p>
                            See some selected front end projects below. For a
                            complete list of projects, please visit my{' '}
                            <a
                                href="https://makerslate.io/deborah"
                                target="_blank"
                                className="links"
                            >
                                makerslate
                            </a>
                            .
                        </p>
                    </div>
                </div>
                <div className="projects__collapsible">
                    {/* Pacific */}
                    <Collapsible title="pacific" bgimage={Pacific}>
                        <h1>
                            Pacific{' '}
                            <span>
                                olympics' equipment provider for winter sports
                            </span>
                            <div className="projects__links">
                                <a
                                    href="https://pacific-xi.vercel.app"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="links"
                                >
                                    web
                                </a>
                                <br></br>
                                <a
                                    href="https://github.com/xdebbie/pacific"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="links"
                                >
                                    code
                                </a>
                            </div>
                        </h1>
                        <div className="chips">
                            <div className="chip">Vue</div>
                            <div className="chip">JavaScript</div>
                            <div className="chip">HTML</div>
                            <div className="chip">CSS</div>
                            <div className="chip">Sass</div>
                        </div>
                        <div className="projects__description">
                            <div className="projects__description--text">
                                <p>
                                    Pacific was my first Vue 3 project. I
                                    started it mainly to learn how to create a
                                    router and a simple carousel gallery on Vue
                                    3 and also to get introduced to Vue, as I
                                    primarily code with React.
                                </p>
                                <p>
                                    I wanted to learn Vue because at my job at
                                    fabriq Vue was the framework of choice.
                                </p>
                                <p>
                                    Turns out I am now comfortable with Vue but
                                    ended up going back to React, with which I
                                    currently work with at Allowa and on my
                                    personal projects. #ReactRocks
                                </p>
                            </div>
                            <div className="projects__description--text">
                                <Lightbox photoSet={photosPacific} />
                            </div>
                        </div>
                    </Collapsible>
                    {/* Forkked */}
                    <Collapsible title="forkked" bgimage={Forkked}>
                        <h1>
                            Forkked{' '}
                            <span>
                                music blog on the style of Pitchfork - but
                                twisted
                            </span>
                            <div className="projects__links">
                                <a
                                    href="https://forkked.vercel.app"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="links"
                                >
                                    web
                                </a>
                                <br></br>
                                <a
                                    href="https://github.com/xdebbie/forkked"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="links"
                                >
                                    code
                                </a>
                            </div>
                        </h1>
                        <div className="chips">
                            <div className="chip">React</div>
                            <div className="chip">Node.js</div>
                            <div className="chip">GraphQL</div>
                            <div className="chip">JavaScript</div>
                            <div className="chip">Python</div>
                            <div className="chip">Mongodb</div>
                            <div className="chip">HTML</div>
                            <div className="chip">CSS</div>
                            <div className="chip">Sass</div>
                            <div className="chip">Adobe XD</div>
                        </div>
                        <div className="projects__description">
                            <div className="projects__description--text">
                                <p>Under construction!</p>
                                <p>
                                    I have always loved writing. And after
                                    working 10+ years in the recording industry,
                                    music is my passion. I also love programming
                                    so I found a way to unite these 3 things - a
                                    music review blog!
                                </p>
                                <p>
                                    This is not your average blog, though.
                                    Imagine Pitchfork, but without being
                                    pretentious. My objective is to debunk most
                                    of Pitchfork's tragic reviews (i.e. the ones
                                    that receive scores below 6.0) and reinstate
                                    the reputation of the pop artists we love.
                                </p>
                                <p>
                                    I have written a{' '}
                                    <a
                                        href="https://github.com/xdebbie/forkkit"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="links"
                                    >
                                        Python script
                                    </a>{' '}
                                    to fetch all Pitchfork's review metadatas
                                    and scores since 1996, which roughly
                                    accounts to about 20,000 reviews as of 2021.
                                    With this data in hand, I created a rankings
                                    section on Forkked that allows an user
                                    search and it orders the music album scores
                                    in descending order... So you can see the
                                    worst albums of all time!
                                </p>
                            </div>
                            <div className="projects__description--text">
                                <Lightbox photoSet={photosForkked} />
                            </div>
                        </div>
                    </Collapsible>
                    {/* Hannah Senesh */}
                    <Collapsible title="hannah senesh" bgimage={Hannah}>
                        <h1>
                            Hannah Senesh{' '}
                            <span>
                                portfolio website built on React, Gatsby and
                                GraphQL
                            </span>
                            <div className="projects__links">
                                <a
                                    href="https://portfolio-hannah-senesh.vercel.app"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="links"
                                >
                                    web
                                </a>
                                <br></br>
                                <a
                                    href="https://github.com/xdebbie/portfolio-hannah-senesh"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="links"
                                >
                                    code
                                </a>
                            </div>
                        </h1>
                        <div className="chips">
                            <div className="chip">React</div>
                            <div className="chip">Node.js</div>
                            <div className="chip">GraphQL</div>
                            <div className="chip">JavaScript</div>
                            <div className="chip">HTML</div>
                            <div className="chip">CSS</div>
                            <div className="chip">Sass</div>
                            <div className="chip">Adobe XD</div>
                        </div>
                        <div className="projects__description">
                            <div className="projects__description--text">
                                <p>
                                    This was my first test website built on
                                    Gatsby, React and GraphQL. It was my first
                                    experience building a blazing fast webpage
                                    using Javascript to insert HTML elements,
                                    and it was a wonderful experience to learn
                                    some more Javascript effectively.
                                </p>
                                <p>
                                    I keep using Sass as its integration is
                                    really smooth with React, and Gatsby +
                                    GraphQL do a really great job at rendering
                                    images which contributes to the page's
                                    loading speed.
                                </p>
                                <p>
                                    I also learnt how to use environment
                                    variables to store API keys in both
                                    development and production phases, with a
                                    complete deployment to Vercel and Netlify.
                                    On the design part, I learnt how to use the
                                    mix-blend function on CSS and also how to
                                    fully customise a Google Maps component.
                                </p>
                            </div>
                            <div className="projects__description--text">
                                <Lightbox photoSet={photosHannah} />
                            </div>
                        </div>
                    </Collapsible>
                    {/* Evergreen & Kotka */}
                    <Collapsible title="evergreen & kotka" bgimage={Kotka}>
                        <h1>
                            Evergreen & Kotka <span>e-commerce platform</span>{' '}
                            <div className="projects__links">
                                <a
                                    href="https://ekotka.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="links"
                                >
                                    web
                                </a>
                            </div>
                        </h1>
                        <div className="chips">
                            <div className="chip">JavaScript</div>
                            <div className="chip">HTML</div>
                            <div className="chip">CSS</div>
                            <div className="chip">Adobe XD</div>
                        </div>
                        <div className="projects__description">
                            <div className="projects__description--text">
                                <p>
                                    E-commerce website for the business I
                                    started in 2019. I designed and manufactured
                                    stainless steel water bottles and created
                                    the website to put them on sale after having
                                    a bad experience selling at Amazon.
                                </p>
                                <p>
                                    To process online payments, I integrated
                                    Stripe to the platform.
                                </p>
                            </div>
                            <div className="projects__description--text">
                                <Lightbox photoSet={photosKotka} />
                            </div>
                        </div>
                    </Collapsible>
                </div>
            </div>
        </div>
    )
}

export default Projects
