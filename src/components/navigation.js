import React from 'react';
import { Link } from "gatsby"
import './../main.scss'

const Navigation = (props) => {
     return (
          <React.Fragment>
               <nav className={`nav-bar ${props.navColor === 'white' ? 'color-white' : 'color-black'}`}>
                    <Link to="/" className="navigation__item " activeClassName="active ">O mnie</Link>
                    <Link to="/muzyka" className="navigation__item "  activeClassName="active ">Muzyka</Link>
                    <Link to="/aktualnosci" className="navigation__item " activeClassName="active ">Aktualności</Link>
                    <Link to="/koncerty" className="navigation__item " activeClassName="active ">Koncerty</Link>
                    <Link to="/zespol" className="navigation__item " activeClassName="active ">Zespół</Link>
                    <Link to="/galeria-zdjec" className="navigation__item " activeClassName="active ">Galeria zdjęć</Link>
                    <Link to="/kontakt" className="navigation__item " activeClassName="active ">Kontakt</Link>
               </nav>
               <nav className="navigation-aside">
                    <Link to="/" className="navigation-aside__item" activeClassName="active-aside"></Link>
                    <Link to="/muzyka" className="navigation-aside__item" activeClassName="active-aside"></Link>
                    <Link to="/aktualnosci" className="navigation-aside__item" activeClassName="active-aside"></Link>
                    <Link to="/koncerty" className="navigation-aside__item" activeClassName="active-aside"></Link>
                    <Link to="/zespol" className="navigation-aside__item" activeClassName="active-aside"></Link>
                    <Link to="/galeria-zdjec" className="navigation-aside__item" activeClassName="active-aside"></Link>
                    <Link to="/kontakt" className="navigation-aside__item" activeClassName="active-aside"></Link>
               </nav>
          </React.Fragment>
     );
};

export default Navigation;