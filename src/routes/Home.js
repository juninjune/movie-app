import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import Header from "../components/Header";
import Loading from "../components/Loading";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  async function getMovies() {
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  }

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <Header />
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              cover_image={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
