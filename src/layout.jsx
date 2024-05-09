/* eslint-disable react/prop-types */
import styles from "./layout.module.css";

export function RootLayout(props) {
  const { children } = props;
  return <main className={styles.content}>{children}</main>;
}
