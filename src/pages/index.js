import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import MainWrapper from "./../components/mainWrapper"
import Navigation from "../components/navigation"

import Home from "./../images/home.png"

const IndexPage = () => (
  <MainWrapper photo={Home} backgroundBlend={true}>
    <SEO title="Karolina Tuz - strona główna" />
    <div className="home">
          <div className="header__text-box">
            <h1 className="heading-primary">
              <span className="heading-primary heading-primary--main">Karolina Tuz</span>
              <span className="heading-primary heading-primary--sub">Strona oficjalna</span>
            </h1>
          </div>
      </div>
    
  {/* <Navigation></Navigation> */}
  </MainWrapper>
)

export default IndexPage
