import React from "react";
import YouTube from "react-youtube";
import "../sass/components/video.scss";

const Video = () => {
  const opts = {
    height: "214px",
    width: "375px"
  };

  return (
    <div className='video'>
      <div className='content-youtube'>
        <YouTube className='youtube' videoId='2g811Eo7K8U' opts={opts} />
      </div>
      <div className='content-titles'>
        <h2 className='title'>TITLE subtitle</h2>
        <h3 className='subtitle'>Trailer</h3>
      </div>
    </div>
  );
};

export default Video;
