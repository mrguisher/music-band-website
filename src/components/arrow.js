import React from 'react';
import MdArrowDown from "react-ionicons/lib/MdArrowDown";
import './../main.scss'

const style = {
     position: 'absolute',
     bottom: '10%',
     left: '45%',
     transform: 'translate(-50%, -50%)',
     height: '8%',
     width: '10%',
     fill: '#fff',
     animation: 'moveDownArrow infinite 2s',
}

const Arrow = () => {
     return (
          <MdArrowDown style={style}></MdArrowDown>
     );
};

export default Arrow;