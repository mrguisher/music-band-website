import React from "react"

import MobileImg from './../images/home-mobile.png'
import DesktopImg from './../images/home.png'
import BackgroundImg from './../components/bcgImage'
import SEO from "../components/seo"
import MainWrapper from "./../components/mainWrapper"

const IndexPage = () => (
  <MainWrapper navColor="white">
    <SEO title="Strona główna" />
    <div className="main home">
      <BackgroundImg
        desktopImg={DesktopImg}
        mobileImg={MobileImg}
        desktopImgAlign={"left-bottom"}
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
