import React from "react";
import YouTube from "react-youtube";
import "./video.scss";

const Video = () => {
  const opts = {
    height: "245px",
    width: "388px"
  };

  return (
    <div className='video'>
      <YouTube className='youtube' videoId='2g811Eo7K8U' opts={opts} />
      <div>
        <h2 className='title'>TITLE subtitle</h2>
        <h3 className='subtitle'>Trailer</h3>
      </div>
    </div>
  );
};

export default Video;
