import React from 'react';
import Media from "react-media"
import "./../main.scss"

const BackgroundImg = (props) => {
     return (
          <React.Fragment>
               <Media
                    query="(min-width: 801px)"
                    render={() => (
                         <img data-src={props.desktopImg} class={`bcg-image bcg-image--${props.desktopImgAlign} ${props.additionalClass} lazyload`} alt="bg-image"/>
                    )}
               />
               <Media
                    query="(max-width: 800px)"
                    render={() => (
                         <img data-src={props.mobileImg} class={`bcg-image bcg-image--${props.smallImgAlign} ${props.additionalClass} lazyload`} alt="bg-image" />
                    )}
               />
          </React.Fragment>
     );
};
export default BackgroundImg