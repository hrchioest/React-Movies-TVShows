import React from "react";
import YouTube from "react-youtube";

import "../sass/components/video.scss";

const Video = ({ id, name, type }) => {
  const opts = {
    height: "214px",
    width: "375px"
  };
  return (
    <div className='video'>
      <div className='content-youtube'>
        <YouTube className='youtube' videoId={id} opts={opts} />
      </div>
      <div className='content-titles'>
        <h2 className='title'>{name}</h2>
        <h3 className='subtitle'>{type}</h3>
      </div>
    </div>
  );
};

export default Video;
