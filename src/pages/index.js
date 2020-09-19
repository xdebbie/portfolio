import React from "react"
import "../sass/main.scss"
import { Helmet } from "react-helmet"

// Import components
import Nav from "../components/nav"
import Banner from "../sections/banner"
import About from "../sections/about"
import Projects from "../sections/projects"
import Stack from "../sections/stack"
import Contact from "../sections/contact"
import Footer from "../components/footer"

class IndexPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>𝘿𝙚𝙗𝙤𝙧𝙖𝙝 𝘾𝙖𝙡𝙙𝙚𝙞𝙧𝙖</title>
          <link rel="prerender" href="http://deborah.vercel.app" />
        </Helmet>
        <Nav />
        <Banner />
        <About />
        <Stack />
        <Projects />
        <Contact />
        <Footer />
      </div>
    )
  }
}

export default IndexPage
