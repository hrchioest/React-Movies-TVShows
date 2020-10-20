import React, { useState, useEffect } from "react";
import { external } from "../service/index";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImdb } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import "../sass/components/redSocial.scss";

const RedSocial = ({ id, type }) => {
  const [socialMedia, setsocialMedia] = useState([]);
  useEffect(() => {
    axios
      .get(external.replace("[id]", id).replace("[type]", type))
      .then((res) => {
        setsocialMedia(res.data);
      })
      .catch((error) => console.log(error));
  }, [id, type]);

  return (
    <div className='links'>
      {socialMedia.imdb_id ? (
        <a
          href={`https://www.imdb.com/title/${socialMedia.imdb_id}`}
          className='links-icon'
        >
          <FontAwesomeIcon icon={faImdb} />
        </a>
      ) : null}

      {socialMedia.twitter_id ? (
        <a
          href={`https://www.twitter.com/${socialMedia.twitter_id}`}
          className='links-icon'
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      ) : null}

      {socialMedia.facebook_id ? (
        <a
          href={`https://www.facebook.com/${socialMedia.facebook_id}`}
          className='links-icon'
        >
          <FontAwesomeIcon icon={faFacebookSquare} />
        </a>
      ) : null}

      {socialMedia.instagram_id ? (
        <a
          href={`https://www.instagram.com/${socialMedia.instagram_id}`}
          className='links-icon'
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      ) : null}
    </div>
  );
};

export default RedSocial;
