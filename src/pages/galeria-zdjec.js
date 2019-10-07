import React from "react"
import { StaticQuery, graphql } from "gatsby";

import MainWrapper from "../components/mainWrapper"
import "./../main.scss"
import Masonry from 'react-masonry-css'

const breakpointColumnsObj = {
  default: 3,
  1200: 2,
  900: 1,
};

const GaleriaZdjec = () => (
  <StaticQuery
    query={graphql`
      query galleryQuery {
        graphCMS {
          images(orderBy: createdAt_DESC) {
            id
            shortDescription
            image {
              id
              url
            }
          }
        }
      }
    `}
    render={data => (
  <MainWrapper heading="Galeria" headingColor="black">
    <div className="main gallery">
      <div className="gallery__wrapper" id="gallery-container">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
      {data.graphCMS.images.map((photo) => (
        <img data-src={photo.image.url} key={photo.id} alt="gallery" className="lazyload"></img>
      ))}
      </Masonry>
      </div>
    </div>
  </MainWrapper>

)}
/>
)

export default GaleriaZdjec