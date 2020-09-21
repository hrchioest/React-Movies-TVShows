import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import Episodio from "../components/Episodio";
import { season } from "../service/index";
import "../sass/sections/temporadas.scss";

const Episodios = ({ id, cantTemp }) => {
  const { temporada } = useParams();
  const history = useHistory();

  console.log({ id, temporada });
  const handleSelect = (event) => {
    const temporada = event.target.value;
    history.push(`/tv/${id}/seasons/${temporada}`);
  };
  const [episodio, setEpisodio] = useState([]);
  useEffect(() => {
    axios
      .get(season.replace("[id]", id).replace("[season_number]", temporada))
      .then((res) => {
        setEpisodio(res.data.episodes);
      })
      .catch((error) => console.log(error));
  }, [id, temporada]);

  return (
    <div className='temporadas'>
      <div className='group-select'>
        <select onChange={handleSelect} className='temp-select'>
          {[...Array(cantTemp).keys()].map((temporada, key) => {
            return (
              <option key={key} value={temporada + 1}>
                Temporada {temporada + 1}
              </option>
            );
          })}
        </select>
      </div>
      <div className='group-temp'>
        {episodio
          ? episodio.map((serie, i) => {
              return (
                <Episodio
                  key={i}
                  image={serie.still_path}
                  episodes={serie.episode_number}
                  name={serie.name}
                  overview={serie.overview}
                />
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Episodios;
