/* eslint-disable react/prop-types */
import styles from "./movie-card.module.css";
import { Link } from "react-router-dom";

export function MovieCard(props) {
  return (
    <Link title={props.hint} className={styles.card} prefetch={false} to={`/movie/${props.id}`}>
      <img width={200} loading="lazy" height={300} src={props.poster} alt={props.title} className={styles.cardImage} />
    </Link>
  );
}
