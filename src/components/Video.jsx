import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import axios from "axios";
import { videoMovie } from "../service/index";
import { useParams } from "react-router-dom";

import "../sass/components/video.scss";

const Video = ({ id }) => {
  const [trailer, setTrailer] = useState([]);
  useEffect(() => {
    axios
      .get(videoMovie.replace("[id]", id))
      .then((res) => {
        setTrailer(res.data.results);
      })
      .catch((error) => console.log(error));
  }, [id]);

  const opts = {
    height: "214px",
    width: "375px"
  };

  return (
    <div className='video'>
      <div className='content-youtube'>
        <YouTube className='youtube' videoId={trailer.id} opts={opts} />
      </div>
      <div className='content-titles'>
        <h2 className='title'>{trailer.name}</h2>
        <h3 className='subtitle'>{trailer.type}</h3>
      </div>
    </div>
  );
};

export default Video;
