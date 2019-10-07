import React from 'react';

const Video = ({ id, width, height }) => (
      <iframe
        className="slider__yt-frame lazyload"
        data-src={`https://www.youtube.com/embed/${id}`}
        width={width} 
        height={height}
        frameBorder="0"
        allowFullScreen
        title="Karolina Tuz"
        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
      />
)
export default Video;