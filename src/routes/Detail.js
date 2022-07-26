import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./Detail.module.css";

import Loading from "../components/Loading";

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
        <Loading />
      ) : (
        <div className={styles.pageContainer}>
          <img src={movie.large_cover_image} className={styles.img}></img>
          <h1>{movie.title}</h1>
          <span className={styles.span}>{movie.year}</span>
          <span className={styles.span}>Rating : {movie.rating}</span>
          <p className={styles.p}>{movie.description_full}</p>
        </div>
      )}
    </div>
  );
}

export default Detail;
