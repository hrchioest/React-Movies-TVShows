import React from 'react';
import Video from "../components/Video";
import {videos} from "../service/index";
import "../sass/sections/videos.scss";
import { useEffect } from 'react';

const Videos = () => {

  const [videosY, setVideosY] = useState([]);
  useEffect(() => {
      axios.get(videosY.replace("[id]", id).replace("[type]", type))
          .then((res) => {
              setVideosY(res.data.results);
          })
          .catch((error) => console.log(error));
  }, [id]);


  return (
    <div className='container-videos'>
      <Video />
      <Video />
      <Video />
      <Video />
    </div>
  );
};

export default Videos;
