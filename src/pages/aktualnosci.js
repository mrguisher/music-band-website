import React from 'react';

import './../main.scss'
import Home from "./../images/home.png"
import MainWrapper from '../components/mainWrapper';

const aktualnosci = () => {
     return (
          <MainWrapper photo={Home} backgroundBlend={true}>
               <div className="box1">
                    <div className="test01">x</div>
               </div>
          </MainWrapper>
     );
};

export default aktualnosci;