import { Tag } from "../components/tag";
import styles from "./movie.module.css";
import { Header } from "../components/header";
import { MovieCard } from "../components/movie-card";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { datas } from "../../datas/movies";

export function MoviePage() {
  let { movieId } = useParams();

  const [movie, setMovie] = useState(datas[0]);
  const [relatedMovies, setRelatedMovies] = useState(datas[0].relatedMovies);

  if (!movie) {
    return (
      <>
        <Header breadcrumb={movieId} />
        <>{movieId} Loading...</>
      </>
    );
  }

  return (
    <>
      <Header breadcrumb={movie.title} />
      <section className={styles.section}>
        <div className={styles.hero}>
          <img src={movie.poster} alt={movie.title} className={styles.heroImage} />
        </div>
        <div className={styles.info}>
          <div className={styles.headline}>
            <h6 className={styles.year}>{movie.year}</h6>
            <h2 className={styles.title}>{movie.title}</h2>
          </div>
          <p className={styles.about}>{movie.about}</p>
          {movie.tags.length > 0 && (
            <div className={styles.tags}>
              {movie.tags.map((tag) => (
                <Tag key={tag} name={tag} />
              ))}
            </div>
          )}
        </div>
      </section>
      {relatedMovies.length > 0 && (
        <>
          <div className={styles.relatedTitle}>
            <h3>Related</h3>
          </div>
          <ul className={styles.related}>
            {relatedMovies.map((movie) => {
              return <MovieCard key={movie.id} id={movie.id} title={movie.title} poster={movie.poster} />;
            })}
          </ul>
        </>
      )}
    </>
  );
}
