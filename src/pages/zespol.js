import React from 'react';

import './../main.scss'
import MainWrapper from '../components/mainWrapper';

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
         <MainWrapper navColor="white">
            <div className="main">
               <section className="band-members-wrapper">
                    {data.graphCMS.bandMembers.map((el) => (
                         <div className="member">
                              <div className="member__image-box">
                                   <img src={el.memberPhoto.url} alt={el.memberName} className="member__img"/>
                              </div>
                              <h3 className="member__name">{el.memberName}</h3>
                              <p className="member__description">{el.memberInfo}</p>
                         </div>
                    ))}
                    
               </section>
            </div>
         </MainWrapper>
      )}
   />
)

export default BandMembers;