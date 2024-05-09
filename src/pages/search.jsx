/* eslint-disable react/prop-types */
import { useState } from "react";
import { Header } from "../components/header";
import { Search } from "../components/search";
import styles from "./search.module.css";
import { MovieCard } from "../components/movie-card";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useSearchParams } from "react-router-dom";

export function SearchPage() {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);

  const query = searchParams.get("query");

  return (
    <>
      <Header breadcrumb="Search" />
      <section>
        <Search />
      </section>
      {query === "" && (
        <section className={styles.samples}>
          <h3 className={styles.samplesTitle}>Sample Searches</h3>
          <ul className={styles.samplesList}>
            <li className={styles.samplesItem}>
              <a href="/search?query=time+travel">
                <MagnifyingGlassIcon />
                time travel
              </a>
            </li>
            <li className={styles.samplesItem}>
              <a href="/search?query=mobster+movies">
                <MagnifyingGlassIcon />
                mobster movies
              </a>
            </li>
            <li className={styles.samplesItem}>
              <a href="/search?query=space+exploration">
                <MagnifyingGlassIcon />
                space exploration
              </a>
            </li>
            <li className={styles.samplesItem}>
              <a href="/search?query=aircraft+crashing">
                <MagnifyingGlassIcon />
                aircrafts crashing
              </a>
            </li>
          </ul>
        </section>
      )}
      {query && (
        <>
          {movies.map((movie) => {
            return <MovieCard key={movie.id} id={movie.id} title={movie.title} poster={movie.poster} />;
          })}
        </>
      )}
    </>
  );
}
