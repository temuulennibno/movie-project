/* eslint-disable react/prop-types */

import { Tag } from "./tag";
import { Link } from "react-router-dom";
import styles from "./header.module.css";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export function Header({ controls, breadcrumb }) {
  const [categories] = useState([]);
  return (
    <header className={styles.header}>
      <div className={styles.leftCol}>
        <h1>
          <Link to="/">❍ Movies</Link>
        </h1>
        {breadcrumb && (
          <div className={styles.breadcrumb}>
            <span className={styles.breadcrumbSeparator}>/</span>
            <h2 className={styles.breadcrumb}>{breadcrumb}</h2>
          </div>
        )}
      </div>
      {controls && (
        <div className={styles.rightCol}>
          <div className={styles.tags}>
            {categories.map((tag) => (
              <Tag name={tag.id} key={tag.id} />
            ))}
          </div>
          <div className={styles.search}>
            <Link to="/search">
              <MagnifyingGlassIcon />
              <span>Search for a movie...</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
