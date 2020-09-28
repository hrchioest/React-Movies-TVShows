import React from 'react';

const Similar = ({ id, type, limit = 0 }) => {
  const [similares, setSimilares] = useState([]);
  useEffect(() => {
    axios
      .get(similars.replace("[id]", id).replace("[type]", type))
      .then((res) => {
        setSimilares(res.data.results);
      })
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div className='similars-box'>
      {similares.map((movie, i) => {
        if (i < limit || limit === 0) {
          return (
            <Card
              key={i}
              id={movie.id}
              type={type}
              image={movie.poster_path}
              title={movie.title || movie.name}
            />
          );
        }
      })}
    </div>
  );
};

export default Similar;

