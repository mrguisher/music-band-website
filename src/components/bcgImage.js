import React from 'react';
import Media from "react-media"
import "./../main.scss"

const BackgroundImg = (props) => {
     return (
          <React.Fragment>
               <Media
                    query="(min-width: 1200px)"
                    render={() => (
                         <img data-src={props.desktopImg} class={`bcg-image bcg-image--${props.desktopImgAlign} ${props.additionalClass} lazyload`}/>
                    )}
               />
               <Media
                    query="(min-width: 600px) and (max-width: 1199px)"
                    render={() => (
                         <img data-src={props.tabImg} class={`bcg-image bcg-image--${props.midImgAlign} ${props.additionalClass} lazyload`} />
                    )}
               />
               <Media
                    query="(max-width: 599px)"
                    render={() => (
                         <img data-src={props.mobileImg} class={`bcg-image bcg-image--${props.smallImgAlign} ${props.additionalClass} lazyload`} />
                    )}
               />
          </React.Fragment>
     );
};
export default BackgroundImg