import React from 'react';

import './../main.scss'
import MainWrapper from '../components/mainWrapper';
import { StaticQuery, graphql } from "gatsby"

const Concerts =  () => (
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
         <MainWrapper navColor="black">
            <div className="main news">
               <p>concerts</p>
               {console.log(data)}
            </div>
         </MainWrapper>
      )}
   />
)

export default Concerts;