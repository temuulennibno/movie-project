/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

import styles from "./tag.module.css";

export function Tag({ name }) {
  return (
    <Link className={styles.tagLink} href={`/tag/${name}`}>
      <aside className={styles.tag}>{name}</aside>
    </Link>
  );
}
