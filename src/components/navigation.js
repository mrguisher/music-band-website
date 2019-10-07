import React, { Component } from "react"
import { Link } from "gatsby"
import "./../main.scss"

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
                        <a href="rider.pdf" className={
                                 el === "navigation"
                                    ? "navigation__item"
                                    : null
                              }>{el === "navigation" && 'Pobierz rider'}</a>
                     </nav>
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
                           <a href="rider.pdf" className="nav-mobile__item">Pobierz rider</a>
                        </nav>
                     </Swipeable>
                           <h2 className={`category__heading color-${this.props.headingColor}`}>
                           {this.props.heading}
                           </h2>

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
         </React.Fragment>
      )
   }
}
export default Navigation