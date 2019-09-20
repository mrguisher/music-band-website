import React from 'react';

const Video = ({ src }) => (
     <div className="video">
       <iframe
          src={src}
         width="640" 
         height="360"
       />
     </div>
   )

export default Video;