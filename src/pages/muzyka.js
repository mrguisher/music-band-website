import React from 'react';

import './../main.scss'
import Home from "./../images/home.png"
import MainWrapper from '../components/mainWrapper';

const Muzyka = () => {
     return (
          <MainWrapper photo={Home} backgroundBlend={true}>
               <div>
                    music
               </div>
          </MainWrapper>
     );
};

export default Muzyka;