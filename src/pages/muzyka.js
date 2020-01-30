import React from "react"
import { StaticQuery, graphql } from "gatsby"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"

import "./../main.scss"
import MobileImg from './../images/music-mobile.jpg'
import DesktopImg from './../images/music.jpg'
import BackgroundImg from './../components/bcgImage'
import MainWrapper from "../components/mainWrapper"
import Video from "../components/video"
import SEO from "../components/seo"

let videosIDs = []

const pickVideosIDs = data => {
  videosIDs.length = 0
  data.allYoutubeVideo.nodes.map(el =>
    data.graphCMS.youtubes.map(
      yt => yt.videoTitle === el.title && videosIDs.push(el.videoId)
    )
  )
}

const Music = () => (
  <StaticQuery
    query={graphql`
      query musicQuery {
        allYoutubeVideo {
          nodes {
            id
            channelId
            videoId
            title
            publishedAt
            description
          }
        }
        graphCMS {
          youtubes {
            id
            status
            videoTitle
          }
        }
      }
    `}
    render={data => (
      <MainWrapper navColor="black" headingColor="black" heading="Muzyka">
      <SEO title="Muzyka" />
        <div className="main yt-video">
          <BackgroundImg
            desktopImg={DesktopImg}
            mobileImg={MobileImg}
            desktopImgAlign={"left-bottom"}
            smallImgAlign={"right-bottom"}
          ></BackgroundImg>
          <div className="slider" id="slider">
            {pickVideosIDs(data)}
            <Carousel
              showArrows={true}
              swipeable={true}
              autoPlay={false}
              showThumbs={false}
              centerMode={true}
              width="100%"
              axis="horizontal"
              centerSlidePercentage="100"
              showStatus={false}
            >
              {videosIDs.map(id => (
                <Video
                  id={id}
                  width="100%"
                  height="100%"
                  frameborder="0"
                ></Video>
              ))}
            </Carousel>
          </div>
        </div>
      </MainWrapper>
    )}
  />
)
export default Music
