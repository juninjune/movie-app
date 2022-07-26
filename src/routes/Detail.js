import { useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});

  const getDetail = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  };

  useState(getDetail(), []);

  return (
    <div>
      {loading ? (
        <div>loading...</div>
      ) : (
        <div className={styles.pageContainer}>
          <img src={movie.large_cover_image}></img>
          <h1>{movie.title}</h1>
          <span>{movie.year}</span>
          <span>Rating : {movie.rating}</span>
          <p>{movie.description_full}</p>
        </div>
      )}
    </div>
  );
}

export default Detail;
