import React from 'react';

import './../main.scss'
import Navigation from './navigation';

const MainWrapper = ({ children, navColor }) => {
     return (
          <section className="App">
          <Navigation navColor={navColor}></Navigation>
               {children}
          </section>
     );
};

export default MainWrapper;