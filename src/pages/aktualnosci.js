import React from 'react';
import { StaticQuery, graphql } from "gatsby"

import './../main.scss'
import MobileImg from './../images/news-mobile.jpg'
import DesktopImg from './../images/news.jpg'
import BackgroundImg from './../components/bcgImage'
import MainWrapper from '../components/mainWrapper';
import Arrow from '../components/arrow';

const News = () => (
     <StaticQuery
     query={graphql`
          query newsQuery {
               graphCMS {
               posts(orderBy: createdAt_DESC) {
                    title
                    status
                    postContent
                    createdAt
                    id
               }
               }
          }
          `}
     render={data => (
          <MainWrapper navColor="black" heading="Aktualności" headingColor="black">
               <div className="main">
               <BackgroundImg 
                    desktopImg={DesktopImg}
                    tabImg={DesktopImg}
                    mobileImg={MobileImg}
                    desktopImgAlign={"left-top"}
                    midImgAlign={"right-bottom"}
                    smallImgAlign={"right-top"}
                    additionalClass="bcg-image__wider"
               >
               </BackgroundImg>
                    <section className="news-wrapper">
                         {data.graphCMS.posts.filter((el) => el.status === "PUBLISHED").map((el) =>  (
                              <div className="post">
                                   <h2 className="post__title">{el.title}</h2>
                                   <p className="post__date">{el.createdAt.slice(0,10)}</p>
                                   <p className="post__description">{el.postContent}</p>
                              </div>
                         ))
                         }
                         <Arrow></Arrow>
                    </section>
               </div>
               
          </MainWrapper>
     )}
     />
)
export default News;