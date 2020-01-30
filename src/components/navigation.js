import React, { Component } from "react"
import { Link } from "gatsby"
import "./../main.scss"

import Spotify from '../icons/socials/spotify.png'
import Youtube from '../icons/socials/youtube.png'
import Facebook from '../icons/socials/facebook.png'
import Instagram from '../icons/socials/instagram.png'

import MdClose from "react-ionicons/lib/MdClose"
import MdMenu from "react-ionicons/lib/MdMenu"
import Media from "react-media"
import { Swipeable } from 'react-swipeable'

class Navigation extends Component {
   constructor() {
      super();

      this.state = {
         navStatus: "hidden",
      };

      this.classes = ["navigation", "navigation-aside"];
      this.items = [
         {
            link: "",
            name: "Start",
         },
         {
            link: "o-mnie",
            name: "O mnie",
         },
         {
            link: "muzyka",
            name: "Muzyka",
         },
         {
            link: "aktualnosci",
            name: "Aktualności",
         },
         {
            link: "koncerty",
            name: "Koncerty",
         },
         {
            link: "zespol",
            name: "Zespół",
         },
         {
            link: "galeria-zdjec",
            name: "Galeria zdjęć",
         },
         {
            link: "kontakt",
            name: "Kontakt",
         },
      ];
   }

   navToggle = () => {
      this.state.navStatus === "hidden"
         ? (this.setState({navStatus: "open"}))
         : (this.setState({navStatus: "hidden"}))
   }

   render() {
      return (
         <React.Fragment>
            <Media
               query="(min-width: 1200px)"
               render={() =>
                  this.classes.map(el => (
                     <React.Fragment>
                     <nav
                        className={
                           el === "navigation"
                              ? `nav-bar ${
                              this.props.navColor === "white"
                                 ? "color-white"
                                 : "color-black"
                              }`
                              : "navigation-aside"
                        }
                     >
                        {this.items.map(item => (
                           <Link
                              to={`/${item.link}`}
                              className={
                                 el === "navigation"
                                    ? "navigation__item"
                                    : "navigation-aside__item"
                              }
                              activeClassName={
                                 el === "navigation"
                                    ? "active"
                                    : "navigation-aside__item active-aside"
                              }
                           >
                              {el === "navigation" && `${item.name}`}
                           </Link>
                        ))}
                        {/* <a href="rider.pdf" className={
                                 el === "navigation"
                                    ? "navigation__item"
                                    : null
                              }>{el === "navigation" && 'Pobierz rider'}</a> */}
                     </nav>
                     </React.Fragment>
                  ))
               }
            />
            <Media
               query="(max-width: 1199px)"
               render={() => (
                  <React.Fragment>
                     <Swipeable onSwipedLeft={(eventData) => {
                        console.log("swiped", eventData);
                        this.state.navStatus === "open" && this.setState({navStatus: "hidden"})
                        }
                     }>
                        <nav
                           className={
                              this.state.navStatus === "hidden"
                                 ? "nav-mobile color-white nav-mobile__hidden"
                                 : "nav-mobile color-white"
                           }
                        >
                           {this.items.map(item => (
                              <Link
                                 to={`/${item.link}`}
                                 className="nav-mobile__item"
                                 activeClassName="nav-mobile__item-active"
                              >
                                 {item.name}
                              </Link>
                           ))}
                           {/* <a href="rider.pdf" className="nav-mobile__item">Pobierz rider</a> */}
                        </nav>
                     </Swipeable>
                           <h1 className={`category__heading color-${this.props.headingColor}`}>
                           {this.props.heading}
                           </h1>

                        {this.state.navStatus === "hidden" ? (
                           <MdMenu
                              className="icon__open"
                              fontSize="60px"
                              onClick={this.navToggle}
                           ></MdMenu>
                        ) : (
                              <MdClose
                                 className="icon__close"
                                 fontSize="60px"
                                 onClick={this.navToggle}
                              ></MdClose>
                           )}
                  </React.Fragment>
               )}
            />

        { ["min-width: 1200px", "max-width: 1199px"].map((mediaQuery) => (
            <Media
                  query={`(${mediaQuery})`}
                  render={() => (
                     <section className="socials">
                        <a href="https://open.spotify.com/artist/52DrgL4hZ0NnEnOSw7yfcr" target="_blank">
                           <img src={Spotify} alt="spotify" className="socials__item"/>
                        </a>
                        <a href="https://www.youtube.com/channel/UCbNGaXCeZFf5T0RKYfDB-uw" target="_blank">
                           <img src={Youtube} alt="youtube" className="socials__item"/>
                        </a>
                        <a href="https://pl-pl.facebook.com/karolinatuz.muzyk" target="_blank">
                           <img src={Facebook} alt="facebook" className="socials__item socials__fb"/>
                        </a>
                        <a href="https://www.instagram.com/karolina_tuz_muzyka/?hl=pl" target="_blank">
                           <img src={Instagram} alt="instagram" className="socials__item"/>
                        </a>
                        
                     </section>
                  )}
               />
         )) }
         </React.Fragment>
      )
   }
}
export default Navigation