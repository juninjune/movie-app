import styles from "./Movie.module.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, cover_image, title, genres, summary }) {
  return (
    <div className={styles.movieInfo}>
      <Link to={`/movie/${id}`}>
        <img src={cover_image} alt="이미지 준비중..." />
      </Link>
      <div className={styles.movieInfo__contexts}>
        <Link to={`/movie/${id}`}>
          <h2>{title}</h2>
        </Link>
        <ul>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
        <p>{summary === "" ? <NoSummary /> : summary}</p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  cover_image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

function NoSummary() {
  return <span className={styles.noSummary}>no summary yet.</span>;
}

export default Movie;
