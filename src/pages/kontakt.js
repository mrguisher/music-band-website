import React from "react"

import MdMail from "react-ionicons/lib/MdMail"
import MdPhonePortrait from "react-ionicons/lib/MdPhonePortrait"
import DesktopImg from './../images/contact.jpg'
import MobileImg from './../images/contact-mobile.jpg'
import BackgroundImg from './../components/bcgImage'
import SEO from "../components/seo"
import './../main.scss'
import MainWrapper from '../components/mainWrapper';

export default () => {
     return (
          <MainWrapper navColor="white" heading="Kontakt" headingColor="black">
          <SEO title="Kontakt" />
               <div className="main">
                    <BackgroundImg
                         desktopImg={DesktopImg}
                         mobileImg={MobileImg}
                         desktopImgAlign={"right-top"}
                         smallImgAlign={"right-top"}
                         additionalClass={"bcg-image__wider"}
                    >
                    </BackgroundImg>
               </div>
               <div className="contact__box">
                    <div className="contact__box--top">
                         <MdPhonePortrait className="contact__icon"></MdPhonePortrait><a href="tel:696-011-528" className="contact__phone"> 696 011 528</a>
                    </div>
                    <div className="contact__box--bottom">
                         <MdMail className="contact__icon"></MdMail> <a href="mailto: karolinatuz_koncerty@wp.pl" className="contact__email"> karolinatuz_koncerty@wp.pl</a>     
                    </div>
               </div>
          </MainWrapper>
     );
};