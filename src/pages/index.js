import React from "react"
import { Link } from "gatsby"

import MobileImg from './../images/home-mobile.jpg'
import DesktopImg from './../images/home.jpg'
import BackgroundImg from './../components/bcgImage'
import SEO from "../components/seo"
import MainWrapper from "./../components/mainWrapper"


const IndexPage = () => (
  <MainWrapper navColor="white">
    <SEO title="Karolina Tuz - strona główna" />
    <div className="main home">
      <BackgroundImg
        desktopImg={DesktopImg}
        tabImg={DesktopImg}
        mobileImg={MobileImg}
        desktopImgAlign={"left-bottom"}
        midImgAlign={"left-bottom"}
        smallImgAlign={"left-bottom"}
        additionalClass={"bcg-image__wider"}
      ></BackgroundImg>
      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary heading-primary--main">
            Karolina Tuz
          </span>
          <span className="heading-primary heading-primary--sub">
            Strona oficjalna
          </span>
        </h1>
      </div>
    </div>
  </MainWrapper>
)

export default IndexPage
