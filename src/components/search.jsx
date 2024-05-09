import styles from "./search.module.css";
import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useSearchParams, useLocation, useNavigate } from "react-router-dom";

export function Search() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();

  const { pathname } = location;

  const [term, setTerm] = useState("");

  function handleChange(ev) {
    setTerm(ev.target.value);
  }

  function handleSubmit(ev) {
    ev.preventDefault();

    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    navigate(`${pathname}?${params.toString()}`);
  }

  return (
    <form className={styles.searchBar} onSubmit={handleSubmit}>
      <MagnifyingGlassIcon className={styles.searchIcon} />
      <input
        autoFocus
        type="text"
        onChange={handleChange}
        className={styles.search}
        placeholder="Search for a movie..."
        defaultValue={searchParams.get("query")?.toString()}
      />
    </form>
  );
}
