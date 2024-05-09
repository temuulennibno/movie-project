/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import styles from "./modal.module.css";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useRef, forwardRef } from "react";

const Modal = forwardRef(({ children, ...resProps }, ref) => {
  const dialogRef = ref;
  return (
    <dialog className={styles.dialog} ref={ref}>
      <div className={styles.content}>
        <div className={styles.title}>
          <h6>{resProps.title}</h6>
          <button className={styles.close} onClick={() => dialogRef.current?.close()}>
            <XMarkIcon />
          </button>
        </div>
        <div className={styles.copy}>{children}</div>
      </div>
    </dialog>
  );
});

export default Modal;

export function useModal() {
  const ref = useRef < HTMLDialogElement > null;
  const onOpen = () => ref.current?.showModal();

  return { ref, onOpen };
}
