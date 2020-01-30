import React from "react"
import { StaticQuery, graphql } from "gatsby";

import MainWrapper from "../components/mainWrapper"
import "./../main.scss"
import Masonry from 'react-masonry-css'
import SEO from "../components/seo"

const breakpointColumnsObj = {
  default: 3,
  1200: 2,
  900: 1,
};

const GaleriaZdjec = () => (
  <StaticQuery
    query={graphql`
      query galleryQuery {
        allInstaNode {
      edges {
        node {
          id
          dimensions {
            height
            width
          }
          preview
        }
    }
  }
      }
    `}
    render={data => (
  <MainWrapper heading="Galeria" headingColor="black">
  <SEO title="Galeria zdjęć" />
    <div className="main gallery">
      <div className="gallery__wrapper" id="gallery-container">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
      {data.allInstaNode.edges.map((image) => (
          <img data-src={image.node.preview} key={image.node.id} alt="gallery" className="lazyload"></img>
      ))}
      </Masonry>
      </div>
    </div>
  </MainWrapper>

)}
/>
)

export default GaleriaZdjec