import React from 'react';

import './../main.scss'

const MainWrapper = ({ children }) => {
     return (
          <body>
               {children}
          </body>
     );
};

export default MainWrapper;