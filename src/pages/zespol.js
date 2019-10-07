import React from 'react';

import './../main.scss'
import MobileImg from './../images/band-mobile.jpg'
import DesktopImg from './../images/band.jpg'
import BackgroundImg from './../components/bcgImage'
import MainWrapper from '../components/mainWrapper';
import Arrow from '../components/arrow';

import { StaticQuery, graphql } from "gatsby"

const BandMembers = () => (
   <StaticQuery
      query={graphql`
         query bandMembersQuery {
            graphCMS {
               bandMembers(orderBy: memberName_DESC) {
                    memberInfo
                    memberName
                    id
                    memberPhoto {
                     height
                     width
                     url
                    }
               }
            }
         }
      `}
      render={data => (
         <MainWrapper navColor="white" heading="Zespół" headingColor="black">
            <div className="main">
            <BackgroundImg 
                  desktopImg={DesktopImg}
                  tabImg={MobileImg}
                  mobileImg={MobileImg}
                  desktopImgAlign={"left-bottom"}
                  midImgAlign={"left-top"}
                  smallImgAlign={"right-top"}
            >
            </BackgroundImg>
               <section className="band-wrapper">
                    {data.graphCMS.bandMembers.map((el) => (
                         <div className="member color-black">
                              <div className="member__image-box">
                                   <img data-src={el.memberPhoto.url} alt={el.memberName} className="member__img lazyload"/>
                              </div>
                              <h3 className="member__name">{el.memberName}</h3>
                              <p className="member__description">{el.memberInfo}</p>
                         </div>
                    ))}
                    <Arrow></Arrow>
               </section>
               
            </div>
           
         </MainWrapper>
      )}
   />
)

export default BandMembers;