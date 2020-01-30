import React from "react"

import "./../main.scss"
import MobileImg from "./../images/about-mobile.jpg"
import DesktopImg from "./../images/about.jpg"
import BackgroundImg from "./../components/bcgImage"
import MainWrapper from "../components/mainWrapper"
import { StaticQuery, graphql } from "gatsby"
import SEO from "../components/seo"

const O_mnie = () => (
  <StaticQuery
    query={graphql`
      query aboutQuery {
        graphCMS {
          abouts {
            status
            id
            text
          }
        }
      }
    `}
    render={data => (
      <MainWrapper navColor="white" heading="O mnie" headingColor="black">
      <SEO title="O mnie" />
        <div className="main about">
          <BackgroundImg
            desktopImg={DesktopImg}
            mobileImg={MobileImg}
            desktopImgAlign={"left-bottom"}
            smallImgAlign={"left-bottom"}
          ></BackgroundImg>
          <div className="about__wrapper">
            {data.graphCMS.abouts.map(
              about =>
                about.status === "PUBLISHED" && (
                  <p className="about__text">{about.text}</p>
                )
            )}
          </div>
        </div>
      </MainWrapper>
    )}
  />
)

export default O_mnie
