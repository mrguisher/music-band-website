import React from 'react';

import './../main.scss'
import Navigation from './navigation';

const MainWrapper = ({ children, navColor, heading, headingColor }) => {
     return (
          <section className="App">
          <Navigation navColor={navColor} heading={heading} headingColor={headingColor}></Navigation>
               {children}
          </section>
     );
};

export default MainWrapper;