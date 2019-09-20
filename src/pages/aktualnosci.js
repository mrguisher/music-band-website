import React from 'react';

import './../main.scss'
import MainWrapper from '../components/mainWrapper';
import { StaticQuery, graphql } from "gatsby"

const News =  () => (
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
          <MainWrapper navColor="black">
               <div className="main news">
                    <section className="news-wrapper">
                         {data.graphCMS.posts.filter((el) => el.status === "PUBLISHED").map((el) =>  (
                              <div className="post">
                                   <h3 className="post__title">{el.title}</h3>
                                   <p className="post__date">{el.createdAt.slice(0,10)}</p>
                                   <p className="post__description">{el.postContent}</p>
                              </div>
                         ))
                         }  
                    </section>
               </div>
          </MainWrapper>
     )}
     />
)
export default News;