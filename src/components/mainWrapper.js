import React from 'react';

import './../main.scss'
import Navigation from './navigation';

const MainWrapper = ({ children }) => {
     return (
          <section className="App">
          <Navigation></Navigation>
               {children}   
          </section>
     );
};

export default MainWrapper;