import React from "react"
import "../sass/main.scss"

// Import components
import Nav from "../components/nav"
import Banner from "../sections/banner"
import About from "../sections/about"
import Projects from "../sections/projects"
import Stack from "../sections/stack"
import Contact from "../sections/contact"
import Footer from "../components/footer"

const IndexPage = () => (
  <div>
    <Nav />
    <Banner />
    <About />
    <Stack />
    <Projects />
    <Contact />
    <Footer />
  </div>
)

export default IndexPage
