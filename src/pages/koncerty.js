import React from "react"

import "./../main.scss";
import MainWrapper from "../components/mainWrapper";
import MobileImg from './../images/concerts-mobile.jpg'
import DesktopImg from './../images/concerts.jpg'
import BackgroundImg from './../components/bcgImage'
import { StaticQuery, graphql } from "gatsby";
import Arrow from '../components/arrow';

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
        <div className="main">
        <BackgroundImg 
            desktopImg={DesktopImg}
            tabImg={DesktopImg}
            mobileImg={MobileImg}
            desktopImgAlign={"left-bottom"}
            midImgAlign={"left-bottom"}
            smallImgAlign={"right-top"}
        >
        </BackgroundImg>
          <div className="concerts-wrapper">
            {data.graphCMS.events.map(
              event =>
                event.status === "PUBLISHED" && (
                  <div className="event">
                    <div className="event__left-wrapper">
                      <h2 className="event__city">{event.cityName}</h2>
                      <h3 className="event__place">{event.placeName}</h3>
                      <p className="event__street">ul. {event.street}</p>
                      <a
                        href={event.facebookLink}
                        target="_blank"
                        className="event__fb btn btn__fill"
                      >
                        więcej
                      </a>
                      <a
                        href={event.locationLink}
                        target="_blank"
                        className="event__location btn btn__fill"
                      >
                        sprawdź na mapie
                      </a>
                    </div>

                    <p className="event__date">
                      <span className="event__date--number">4</span>
                      <span className="event__date--month">wrz</span>
                    </p>
                  </div>
                )
            )}
            <Arrow></Arrow>
          </div>
          
        </div>
      </MainWrapper>
    )}
  />
)
export default Concerts