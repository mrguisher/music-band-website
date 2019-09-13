import React from 'react';

import './../main.scss'
import Home from "./../images/home.png"
import MainWrapper from '../components/mainWrapper';

const Koncerty = () => {
     return (
          <MainWrapper photo={Home} backgroundBlend={true}>
          <div>
               concerts
          </div>
          </MainWrapper>
     );
};

export default Koncerty;