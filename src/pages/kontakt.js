import React from "react"

import MdMail from "react-ionicons/lib/MdMail"
import MdPhonePortrait from "react-ionicons/lib/MdPhonePortrait"
import DesktopImg from './../images/contact.jpg'
import BackgroundImg from './../components/bcgImage'

import './../main.scss'
import MainWrapper from '../components/mainWrapper';

export default () => {
     return (
          <MainWrapper navColor="white" heading="Kontakt" headingColor="black">
               <div className="main">
                    <BackgroundImg
                         desktopImg={DesktopImg}
                         tabImg={DesktopImg}
                         mobileImg={DesktopImg}
                         desktopImgAlign={"right-top"}
                         midImgAlign={"rignt-bottom"}
                         smallImgAlign={"right-top"}
                         additionalClass={"bcg-image__wider"}
                    >
                    </BackgroundImg>
               </div>
               <div className="contact__box">
                    <div className="contact__box--top">
                         <MdMail className="contact__icon"></MdMail><h3 className="contact__phone"> +48 ... ... ...</h3>
                    </div>
                    <div className="contact__box--bottom">
                         <MdPhonePortrait className="contact__icon"></MdPhonePortrait> <h3 className="contact__email"> kontakt@... .pl</h3>     
                    </div>
               </div>
          </MainWrapper>
     );
};