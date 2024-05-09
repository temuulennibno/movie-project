/* eslint-disable react/prop-types */
import styles from "./pulse.module.css";
import Modal, { useModal } from "./modal";

export function Pulse(props) {
  const { ref, onOpen } = useModal();
  return (
    <>
      <div onClick={onOpen} className={`${styles.pulse} ${props.className}`}>
        <div className={styles.circle}></div>
      </div>
      <Modal title={props.title} ref={ref}>
        {props.children}
      </Modal>
    </>
  );
}
