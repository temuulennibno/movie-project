import styles from "./home.module.css";
import { Header } from "../components/header";
import { MovieCard } from "../components/movie-card";
import { useEffect, useState } from "react";
import axios from "axios";

export function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3200/api/movies").then((res) => {
      setMovies(res.data);
    });
  }, []);

  useEffect(() => {}, []);
  return (
    <>
      <Header controls />
      <ul className={styles.grid}>
        {movies &&
          movies.map((movie) => {
            return <MovieCard key={movie._id} id={movie._id} title={movie.title} poster={movie.poster} />;
          })}
      </ul>
    </>
  );
}
