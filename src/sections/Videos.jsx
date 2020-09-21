import React, { useState, useEffect } from "react";
import Video from "../components/Video";
import axios from "axios";
import { videoMovie } from "../service/index";
import "../sass/sections/videos.scss";

const Videos = ({ id }) => {
  const [trailer, setTrailer] = useState([]);
  useEffect(() => {
    axios
      .get(videoMovie.replace("[id]", id))
      .then((res) => {
        setTrailer(res.data.results);
      })
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div className='container-videos'>
      {trailer
        ? trailer.map((movie, i) => {
            return (
              <Video
                name={movie.name}
                key={i}
                id={movie.key}
                type={movie.type}
              />
            );
          })
        : null}
    </div>
  );
};

export default Videos;
