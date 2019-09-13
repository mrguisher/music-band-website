import React from 'react';

import './../main.scss'
import Home from "./../images/home.png"
import MainWrapper from '../components/mainWrapper';

const Kontakt = () => {
     return (
          <MainWrapper photo={Home} backgroundBlend={true}>
               <div>
                    contact
               </div>
          </MainWrapper>
     );
};

export default Kontakt;