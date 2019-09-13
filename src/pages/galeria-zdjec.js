import React from 'react';

import MainWrapper from '../components/mainWrapper';
import Home from "./../images/home.png"
import './../main.scss'

const GaleriaZdjec = () => {
     return (
          <MainWrapper photo={Home} backgroundBlend={true}>
               <div>
                    galeria
               </div>
          </MainWrapper>
     );
};

export default GaleriaZdjec;