import React from "react"

import "./../main.scss";
import MainWrapper from "../components/mainWrapper";
import MobileImg from './../images/concerts-mobile.jpg'
import DesktopImg from './../images/concerts.jpg'
import BackgroundImg from './../components/bcgImage'
import { StaticQuery, graphql } from "gatsby";
import SEO from "../components/seo"

const months = {
  sty: '01',
  lut: '02',
  mar: '03',
  kwi: '04',
  maj: '05',
  cze: '06',
  lip: '07',
  sie: '08',
  wrz: '09',
  paź: '10',
  lis: '11',
  gru: '12'
}

const Concerts = () => (
  <StaticQuery
    query={graphql`
      query concertsQuery {
        graphCMS {
          events(orderBy: date_DESC) {
            cityName
            date
            facebookLink
            id
            locationLink
            placeName
            status
            street
          }
        }
      }
    `}
    render={data => (
      <MainWrapper navColor="white" heading="Koncerty" headingColor="black">
      <SEO title="Koncerty" />
        <div className="main">
        <BackgroundImg 
            desktopImg={DesktopImg}
            mobileImg={MobileImg}
            desktopImgAlign={"left-bottom"}
            smallImgAlign={"right-top"}
        >
        </BackgroundImg>
          <div className="concerts-wrapper">
            {data.graphCMS.events.map(
              ({ status,
                cityName,
                placeName,
                street,
                facebookLink,
                locationLink,
                date }) =>
                status === "PUBLISHED" && (
                  <div className="event">
                    <div className="event__left-wrapper">
                      <h2 className="event__city">{cityName}</h2>
                      <h3 className="event__place">{placeName}</h3>
                      <p className="event__street">{street}</p>
                      <a
                        href={facebookLink}
                        target="_blank"
                        className="event__fb btn btn__fill"
                      >
                        więcej
                      </a>
                      <a
                        href={locationLink}
                        target="_blank"
                        className="event__location btn btn__fill"
                      >
                        sprawdź na mapie
                      </a>
                    </div>

                    <p className="event__date">
                      <span className="event__date--number">{date.slice(8,10)}</span>
                      <span className="event__date--month">{Object.entries(months).find((el) => el[1] === date.slice(5,7))[0]}</span>
                    </p>
                  </div>
                )
            )}
            
          </div>
          
        </div>
      </MainWrapper>
    )}
  />
)
export default Concerts