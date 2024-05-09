import styles from "./home.module.css";
import { Header } from "../components/header";
import { MovieCard } from "../components/movie-card";
import { useState } from "react";
import { datas } from "../../datas/movies";
export function Home() {
  const [movies] = useState(datas);
  return (
    <>
      <Header controls />
      <ul className={styles.grid}>
        {movies &&
          movies.map((movie) => {
            return <MovieCard key={movie.id} id={movie.id} title={movie.title} poster={movie.poster} />;
          })}
      </ul>
    </>
  );
}
